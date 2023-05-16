function kiem_tra() {
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / (chieu_cao*chieu_cao)
    let result = "";
     if (bmi < 18.5)
        result = "Underweight"
    else if (bmi < 25)
        result = "Normal"
    else if (bmi < 30)
        result = "Overweight"
    else
        result = "Obese"

    document.getElementById("result").innerHTML = "Chi so BMI la: " + bmi + ". Ban dang " + "<b>"+ result + "</b>";
}