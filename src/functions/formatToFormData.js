export const formatToFormData = (cv) => {
 const formData = new FormData();
 for (let key in cv) {
  if (Array.isArray(cv[key])) {
   cv[key].forEach((item, index) => {
    for (let k in item) {
     formData.append(`${key}[${index}][${k}]`, item[k]);
    }
   });
  } else {
   formData.append(key, cv[key]);
  }
 }
 return formData
}