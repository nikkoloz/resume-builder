export const imageHandler = (e, setFieldValue) => {
 const image = e.target.files[0];
 const reader = new FileReader();
 reader.readAsDataURL(image);
 reader.addEventListener("load", () => {
  setFieldValue("image", reader.result);
 });
};