import BaseAPI from "@/api/base/BaseAPI.js";
import BaseAPIConfig from "../base/BaseAPIConfig.js";

class EmployeeAPI extends BaseAPI {
  constructor() {
    super();
    this.controller = "Employees";
  }

  /**
   * Kiem tra ma nhan vien co ton tai khong
   * @param {*} employeeCode : mã nhân viên
   * @returns true -  đã tồn tại; false - chưa.
   * CreatedBy: NHHoang (30/08/2021)
   */
  checkEmployeeCodeExists(employeeCode) {
    return BaseAPIConfig.get(
      `${this.controller}/CheckEmployeeCodeExists/${employeeCode}`
    );
  }

  /**
   * Kiem tra nhan vien ton tai khong
   * @param {*} id : id nhân viên
   * @returns true -  đã tồn tại; false - chưa.
   * CreatedBy: NHHoang (30/08/2021)
   */
  checkEmployeeExists(id) {
    return BaseAPIConfig.get(`${this.controller}/CheckEmployeeExists/${id}`);
  }

  /**
   * Lấy mã nhân viên mới
   * @returns  mã nhân viên mới
   * CreatedBy: NHHoang (30/08/2021)
   */
  getNewEmployeeCode() {
    return BaseAPIConfig.get(`${this.controller}/NewEmployeeCode`);
  }

  /**
   * láy danh sach nhân viên theo bộ lọc và phân trang
   * @param {*} pageIndex index trang
   * @param {*} pageSize kích cỡ trang
   * @param {*} employeeFilter bộ lọc
   * @returns danh sách nhân viên
   * CreatedBy: NHHoang (30/08/2021)
   */
  getByFilterPaging(pageIndex, pageSize, employeeFilter = "") {
    return BaseAPIConfig.get(
      `${this.controller}/Filter?pageIndex=${pageIndex}&pageSize=${pageSize}&employeeFilter=${employeeFilter}`
    );
  }

  /**
   * export dữ liệu
   * @param {*} pageIndex
   * @param {*} pageSize
   * @param {*} employeeFilter
   * @returns file excel
   * CreatedBy: NHHoang (29/08/2021)
   */
  export(pageIndex, pageSize, employeeFilter = "") {
    return BaseAPIConfig.get(
      `${this.controller}/Export?pageIndex=${pageIndex}&pageSize=${pageSize}&employeeFilter=${employeeFilter}`,
      {
        responseType: "blob",
      }
    );
  }
}

export default new EmployeeAPI();
