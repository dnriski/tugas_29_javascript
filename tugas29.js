function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let newData = new RegExp("bersama");

  console.log(newData.exec(data));
}
regex();
