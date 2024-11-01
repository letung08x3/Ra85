// Hàm generarreID
export function generateId() {
  let idStart = 0;
  //   Kiểm tra xem đã có dữ liệu trong LocalStorage chưa, nếu có thì lấy giá trị id lớn nhất của
  // listAccount để làm id bắt đầu
  if (localStorage && localStorage.getItem("listUser")) {
    let listAccount = JSON.parse(localStorage.getItem("listUser"));

    listAccount.forEach((account) => {
      if (account.Id > idStart) {
        idStart = account.Id;
      }
    });
  }

  let Id = idStart + 1;

  return Id;
}
