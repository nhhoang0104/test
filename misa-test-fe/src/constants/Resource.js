var Resource = Resource || {};

// message popup
Resource.PopupMessage = {
  DeleteList: `Bạn có thực sự muốn xóa các nhân viên không?`,
  DeleteById: `Bạn có thực sự muốn xóa Nhân viên < {0} > không?`,
};

// trạng thái
Resource.StatusCode = {
  Success: 200,
  ChangeSuccess: 201,
  NoContent: 204,
  BadRequest: 400,
  Server: 500,
};

// tin nhắn lỗi
Resource.ErrorMessage = {
  EmployeeCode: "Mã không được để trống",
  EmployeeCodeExist:
    "Mã nhân viên < {0} > đã tồn tại trong hệ thống. Xin vui lòng kiểm ta lại",
  IdentityNumber: "Giá trị của CMND không đúng giá trị",
  DepartmentId: "Đơn vị không được để trống",
  Email: "Email không đúng định dạng",
  FullName: "Tên không được để trống",
  Date: "Ngày không được quá ngày hiện tại",
};

// tin nhắn
Resource.ToastMessage = {
  LoadSuccess: "Tải dữ liệu thành công",
  AddSuccess: "Thêm dữ liệu thành công",
  EditError: "Cập nhật dữ liệu thất bại",
  AddError: "Thêm dữ liệu thất bại",
  EditSuccess: "Cập nhật dữ liệu thành công",
  DeleteSuccess: "Xoá dữ liệu thành công",
  DeleteListError: "Xoá dữ liệu thất bại",
  EmployeeExistError:
    "Nhân viên không tồn tại trong hệ thống. Vui lòng tải lại trang!",
  ServerError: "Có lỗi xảy ra, vui lòng liên hệ MISA",
};

//Các chế độ toast message
Resource.ToastType = {
  Success: "success",
  Warning: "warning",
  Error: "error",
};

// các chế đọ form
Resource.FormMode = {
  Add: 1,
  Update: 2,
  Replica: 3,
};

// các loại submit
Resource.TypeSubmit = {
  NewForm: 1,
  NoForm: 0,
};

// id giới tính
Resource.Gender = {
  Female: 0,
  Male: 1,
  Other: 2,
};

export default Resource;
