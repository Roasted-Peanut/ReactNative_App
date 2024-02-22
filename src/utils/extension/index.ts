import _ from "lodash";
import moment from "moment";
import { Dimensions, NativeModules, Platform, StatusBar } from "react-native";
import { DownLoadMeidaProps } from "../../types";
import { isIOS } from "../../themes";

const getFontSizeDimensions = (value: number) => {
  const fontSizeWindow = Dimensions.get("window").width * value;
  return fontSizeWindow;
};

const ImageType = ["jpeg", "png", "jpg"];

const handleDownLoadMeida = ({
  dataBase64,
  mime,
  callBackSuccess,
}: DownLoadMeidaProps) => {
  const timeNow = moment().format("YYYYMMDDHHmmss");
  var Base64Code = dataBase64.split(","); //base64Image is my image base64 string
  var mimeType = mime?.split("/");
  const type = ImageType.find((el) => el == mimeType[1]);
  if (!_.isNil(type)) {
    const { DownloadMediaNativeModule } = NativeModules;
    try {
      DownloadMediaNativeModule.downloadMedia(
        Base64Code[1],
        mime,
        type,
        timeNow,
        (res: any) => {
          if (res) {
            callBackSuccess && callBackSuccess("Down load success.");
          } else {
            callBackSuccess && callBackSuccess("Down load error");
          }
        }
      );
    } catch (error) {
      console.log("download_Media_error", error);
      callBackSuccess && callBackSuccess("Down load error");
    }
  } else {
    callBackSuccess && callBackSuccess("保存できませんでした。");
  }
};

function getStatusBarHeight(skipAndroid = false): number {
  if (isIOS) {
    return isIphoneX() ? 65 : 30;
  }
  if (skipAndroid) {
    return 0;
  }

  return StatusBar.currentHeight || 0;
}

function isIphoneX(): boolean {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 852 ||
      width === 852 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  );
}

function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isObject<T>(val: T): boolean {
  return (
    typeof val === "object" && val?.constructor !== FormData && val !== null
  );
}

export {
  getFontSizeDimensions,
  handleDownLoadMeida,
  getStatusBarHeight,
  isIphoneX,
  validateEmail,
  isObject,
};
