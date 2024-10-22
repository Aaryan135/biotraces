import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { MedicalRecordList } from "./medicalRecord/MedicalRecordList";
import { MedicalRecordCreate } from "./medicalRecord/MedicalRecordCreate";
import { MedicalRecordEdit } from "./medicalRecord/MedicalRecordEdit";
import { MedicalRecordShow } from "./medicalRecord/MedicalRecordShow";
import { TaxReturnList } from "./taxReturn/TaxReturnList";
import { TaxReturnCreate } from "./taxReturn/TaxReturnCreate";
import { TaxReturnEdit } from "./taxReturn/TaxReturnEdit";
import { TaxReturnShow } from "./taxReturn/TaxReturnShow";
import { EducationRecordList } from "./educationRecord/EducationRecordList";
import { EducationRecordCreate } from "./educationRecord/EducationRecordCreate";
import { EducationRecordEdit } from "./educationRecord/EducationRecordEdit";
import { EducationRecordShow } from "./educationRecord/EducationRecordShow";
import { VaccinationList } from "./vaccination/VaccinationList";
import { VaccinationCreate } from "./vaccination/VaccinationCreate";
import { VaccinationEdit } from "./vaccination/VaccinationEdit";
import { VaccinationShow } from "./vaccination/VaccinationShow";
import { DoctorPrescriptionList } from "./doctorPrescription/DoctorPrescriptionList";
import { DoctorPrescriptionCreate } from "./doctorPrescription/DoctorPrescriptionCreate";
import { DoctorPrescriptionEdit } from "./doctorPrescription/DoctorPrescriptionEdit";
import { DoctorPrescriptionShow } from "./doctorPrescription/DoctorPrescriptionShow";
import { BankDetailList } from "./bankDetail/BankDetailList";
import { BankDetailCreate } from "./bankDetail/BankDetailCreate";
import { BankDetailEdit } from "./bankDetail/BankDetailEdit";
import { BankDetailShow } from "./bankDetail/BankDetailShow";
import { BankTransactionList } from "./bankTransaction/BankTransactionList";
import { BankTransactionCreate } from "./bankTransaction/BankTransactionCreate";
import { BankTransactionEdit } from "./bankTransaction/BankTransactionEdit";
import { BankTransactionShow } from "./bankTransaction/BankTransactionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BackendService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="MedicalRecord"
          list={MedicalRecordList}
          edit={MedicalRecordEdit}
          create={MedicalRecordCreate}
          show={MedicalRecordShow}
        />
        <Resource
          name="TaxReturn"
          list={TaxReturnList}
          edit={TaxReturnEdit}
          create={TaxReturnCreate}
          show={TaxReturnShow}
        />
        <Resource
          name="EducationRecord"
          list={EducationRecordList}
          edit={EducationRecordEdit}
          create={EducationRecordCreate}
          show={EducationRecordShow}
        />
        <Resource
          name="Vaccination"
          list={VaccinationList}
          edit={VaccinationEdit}
          create={VaccinationCreate}
          show={VaccinationShow}
        />
        <Resource
          name="DoctorPrescription"
          list={DoctorPrescriptionList}
          edit={DoctorPrescriptionEdit}
          create={DoctorPrescriptionCreate}
          show={DoctorPrescriptionShow}
        />
        <Resource
          name="BankDetail"
          list={BankDetailList}
          edit={BankDetailEdit}
          create={BankDetailCreate}
          show={BankDetailShow}
        />
        <Resource
          name="BankTransaction"
          list={BankTransactionList}
          edit={BankTransactionEdit}
          create={BankTransactionCreate}
          show={BankTransactionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
