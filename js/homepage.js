window.addEventListener("DOMContentLoaded",(event)=>{
    let employeePayrollDataList = getEmployeePayrollDataStorage();
    document.querySelector(".emp-count").textContent = employeePayrollDataList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
});

function getEmployeePayrollDataStorage(){
    return localStorage.getItem("EmployeePayrollList")?JSON.parse(localStorage.getItem("EmployeePayrollList")):[];
}

function createInnerHtml(){
    let employeePayrollDataList = getEmployeePayrollDataStorage();
    const innerHeaderHtml  ="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"; 
    let innerHtml = `${innerHeaderHtml}`;
    for(const employeePayrollData of employeePayrollDataList){
        console.log(employeePayrollData._profilePic);
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt=""
                        src="${employeePayrollData._profilePic}">
            </td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete"
                    src="../assets/delete-black-18dp.svg">
                <img id="${employeePayrollData._id}" alt="edit" onclick="update(this)"
                        src="../assets/create-black-18dp.svg">
            </td>
        </tr>
        `;
    
        document.querySelector("#table-display").innerHTML = innerHtml; 
    }
}

// function createEmployeePayrollJSON(){
//     let employeePayrollListLocal = [
//         {
//             _name: "Priyam Mukhopadhyay",
//             _gender:"male",
//             _department: [
//                 "Engineering",
//                 "Finance"
//             ],
//             _salary: "30000",
//             _startDate: "29 Oct 2019",
//             _note: "",
//             _id: new Date().getTime(),
//             _profilePic: "../assets/Ellipse -8.png"
//         },

//         {
//             _name: "Preetam Mukhopadhyay",
//             _gender:"male",
//             _department: [
//                 "Engineering",
//                 "Finance"
//             ],
//             _salary: "30000",
//             _startDate: "29 Oct 2019",
//             _note: "",
//             _id: new Date().getTime(),
//             _profilePic: "../assets/Ellipse -2.png"
//         }
        
//     ];

//     return employeePayrollListLocal;
// }

function getDeptHtml(deptList){
    let deptHtml  ="";
    for (const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label" >${dept}</div>`
    }
    return deptHtml;
}