import moment from "moment";
import { DownLoadMeidaProps } from "../../types";
import { Dimensions, NativeModules } from 'react-native';
import _ from 'lodash';

const getFontSizeDimensions = (value: number) => {
  const fontSizeWindow = Dimensions.get('window').width * value;
  return fontSizeWindow;
}

const ImageType = ["jpeg", "png", "jpg"];

const handleDownLoadMeida = ({ dataBase64, mime, callBackSuccess }: DownLoadMeidaProps) => {
  const timeNow = moment().format('YYYYMMDDHHmmss');
  var Base64Code = dataBase64.split(","); //base64Image is my image base64 string
  var mimeType = mime?.split("/");
  const type = ImageType.find((el) => el == mimeType[1]);
  if (!_.isNil(type)) {
    const { DownloadMediaNativeModule } = NativeModules;
    try {
      DownloadMediaNativeModule.downloadMedia(Base64Code[1], mime, type, timeNow, (res: any) => {
        if (res) {
          callBackSuccess && callBackSuccess("Down load success.");
        }
        else {
          callBackSuccess && callBackSuccess("Down load error");
        }
      });
    } catch (error) {
      console.log("download_Media_error", error);
      callBackSuccess && callBackSuccess("Down load error");
    }
  }
  else {
    callBackSuccess && callBackSuccess("保存できませんでした。");
  }
}

export { getFontSizeDimensions, handleDownLoadMeida };
