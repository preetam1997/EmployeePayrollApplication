window.addEventListener("DOMContentLoaded",(event)=>{
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input",function(){
        if(name.value.length ==0){
            textError.textContent = "";
            return;
        }
        try{
            new EmployeePayrollData().name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent=e;
        }
    });
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input",function(){
        output.textContent = salary.value;
    });

    
});

function save(){
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        console.error(e);
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const createEmployeePayroll=()=>{
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    } catch (e) {
        setTextVale(".text-error",e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.note = getInputValueById("#notes");
    let date = getInputValueById("#day")+" "+getInputValueById("#month")+" "+getInputValueById("#year");
    employeePayrollData.startDate= new Date(Date.parse(date)).toLocaleDateString("en-GB", {year : 'numeric',month : 'long',day : 'numeric'});
    console.log(employeePayrollData.toString());
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id)=>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id)=>{
    let value = document.getElementById(id).value;
    return value;
}


const resetForm = ()=>{
    setValue("#name"," ");
    unsetSelectValues("[name=profile]");
    unsetSelectValues("[name=gender]");
    unsetSelectValues("[name=department]");
    setValue("#salary","");
    setValue("#notes","");
    setValue("#day","1");
    setValue("#month","January");
    setValue("#year","2020");
    localStorage.clear();
}

const unsetSelectValues = (propertyValue) =>{
    let allItems =[]; 
    allItems.push(document.querySelector(propertyValue));
    console.log(allItems.length);
    allItems.forEach(item =>{
        item.checked = false;
    });
}

const setTextValue = (id,value) =>{
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id,value) =>{
    const element = document.querySelector(id);
    element.value = value;
}