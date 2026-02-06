function predict() {
    const data = {
        age: Number(age.value),
        sex: Number(sex.value),
        cp: Number(cp.value),
        trestbps: Number(trestbps.value),
        chol: Number(chol.value),
        fbs: Number(fbs.value),
        restecg: Number(restecg.value),
        thalach: Number(thalach.value),
        exang: Number(exang.value),
        oldpeak: Number(oldpeak.value),
        slope: Number(slope.value),
        ca: Number(ca.value),
        thal: Number(thal.value)
    };

    fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("result").innerText = result.result;
    })
    .catch(err => {
        alert("API Error");
        console.error(err);
    });
}
