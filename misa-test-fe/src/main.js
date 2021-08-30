import { createApp } from "vue";
import App from "./App.vue";
import { BaseButton } from "@/components/base/button";
import BaseInput from "@/components/base/BaseInput";
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
} from "@/components/base/table";

import { BaseComboBox, BaseComboBoxOption } from "@/components/base/comboBox";
import BasePagination from "@/components/base/BasePagination.vue";
import BasePopup from "./components/base/BasePopup.vue";

import "devextreme/dist/css/dx.light.css";

const app = createApp(App);

app.component(BaseButton.name, BaseButton);
app.component(BaseInput.name, BaseInput);

app.component(BaseTable.name, BaseTable);
app.component(BaseTableHead.name, BaseTableHead);
app.component(BaseTableBody.name, BaseTableBody);

app.component(BaseComboBox.name, BaseComboBox);
app.component(BaseComboBoxOption.name, BaseComboBoxOption);

app.component(BasePagination.name, BasePagination);
app.component(BasePopup.name, BasePopup);

app.mount("#app");