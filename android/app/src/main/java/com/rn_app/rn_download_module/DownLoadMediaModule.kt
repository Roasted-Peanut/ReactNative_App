package com.rn_app.rn_download_module

import android.content.ContentValues
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.media.MediaScannerConnection
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import android.util.Base64
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rn_app.MyAppPackage.reactContext

import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStream


class DownloadMediaModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  companion object {
    private const val STORAGE_PERMISSION_CODE = 101
  }

  override fun getName() = "DownloadMediaModule"

  @ReactMethod
  private fun downloadMedia(dataImage: String, mimeType: String, typeMedia: String, timeNow: String, callBack: Callback) {
      val androidVersion = Build.VERSION.RELEASE.split('.')

      val decodeBase64: ByteArray = Base64.decode(dataImage, Base64.DEFAULT) // for android >= 10
      val imageBytes = BitmapFactory.decodeByteArray(decodeBase64, 0, decodeBase64.size) // for android < 10
      var displayName = "Media_Name${timeNow}.${typeMedia}"

      if (androidVersion[0].toInt() < 10) {
        var permission = checkPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, STORAGE_PERMISSION_CODE)
        if (permission) {
          val file = File(
            Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM),
            displayName
          )
          try {
            val fos = FileOutputStream(file)
            if (fos == null) {
              callBack.invoke(false)
              throw IOException("Failed to get output stream.")
            }
            fos.write(decodeBase64)
            fos.flush()
            fos.close()
            MediaScannerConnection.scanFile(reactContext, arrayOf<String>(file.absolutePath), null
            ) { path, uri ->
              if (path != null) {
                callBack.invoke(true)
              } else {
                callBack.invoke(false)
              }
              Log.d("MediaScannerConnection", "downloadMedia: $path, $uri") }
          } catch (e: Exception) {
            callBack.invoke(false)
            throw IOException("Failed to save bitmap.")
          }
        } else {
          callBack.invoke(false)
          throw IOException("PERMISSION_DENIED")
        }
      } else {
        val contentValues = ContentValues().apply {
          put(MediaStore.Images.Media.DISPLAY_NAME, displayName)
          put(MediaStore.Images.Media.MIME_TYPE, "$mimeType")
          put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_DCIM)
        }
        val contentResolver = reactContext.contentResolver
        var uri: Uri? = null
        var outputStream: OutputStream? = null
        try {
          val imagesCollectionUri =
            MediaStore.Images.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY)
          uri = contentResolver.insert(imagesCollectionUri, contentValues)
          if (uri == null) {
            callBack.invoke(false)
            throw IOException("Failed to create new MediaStore record.")
          }
          outputStream = contentResolver.openOutputStream(uri)
          if (outputStream == null) {
            callBack.invoke(false)
            throw IOException("Failed to get output stream.")
          }
          when (typeMedia) {
            "png" -> {
              if (!imageBytes.compress(Bitmap.CompressFormat.PNG, 95, outputStream)) {
                callBack.invoke(false)
                throw IOException("Failed to save bitmap.")
              } else {
                callBack.invoke(true)
              }
            }
            else -> {
              if (!imageBytes.compress(Bitmap.CompressFormat.JPEG, 95, outputStream)) {
                callBack.invoke(false)
                throw IOException("Failed to save bitmap.")
              } else {
                callBack.invoke(true)
              }
            }
          }
        } catch (e: Exception) {
          Log.d("Exception", "downloadMedia: $e")
          callBack.invoke(false)
          uri?.let { contentResolver.delete(it, null, null) }
        } finally {
          outputStream?.close()
        }
      }
  }

  // Function to check and request permission.
  private fun checkPermission(permission: String, requestCode: Int): Boolean {
    return if (ContextCompat.checkSelfPermission(reactContext, permission) == PackageManager.PERMISSION_DENIED) {
      currentActivity?.let { ActivityCompat.requestPermissions(it, arrayOf(permission), requestCode) }
      ContextCompat.checkSelfPermission(reactContext, permission) != PackageManager.PERMISSION_DENIED
    } else {
      true
    }
  }
}
