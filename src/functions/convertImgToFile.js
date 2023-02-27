export const convertImgToFile = (personalInformation,img) => {
 const dataUrl = img;
 const parts = dataUrl.split(";base64,");
 const contentType = parts[0].split(":")[1];
 const binary = window.atob(parts[1]);
 const uint8Array = new Uint8Array(binary.length);

 for (let i = 0; i < binary.length; i++) {
  uint8Array[i] = binary.charCodeAt(i);
 }
 return new File([uint8Array], personalInformation.image.name, {
  type: contentType,
 });
}