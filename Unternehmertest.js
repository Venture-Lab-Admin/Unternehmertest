function calcResult() {
    const MAXSCORE = 113.0;
    var score = 0.0;
    var result = document.getElementById('result');
    var resultPage = document.getElementById('result2');
    var furtherText = document.getElementById("furtherText");
    var unternehmertest = document.getElementById('unternehmertest');

    var q1 = document.unternehmertest.question1.value;
    var q2 = document.unternehmertest.question2.value;
    var q3 = document.unternehmertest.question3.value;
    var q4 = document.unternehmertest.question4.value;
    var questionsWithStandardPoints = [
        document.unternehmertest.question5.value, 
        document.unternehmertest.question7.value, 
        document.unternehmertest.question8.value,
        document.unternehmertest.question9.value,
        document.unternehmertest.question10.value,
        document.unternehmertest.question11.value,
        document.unternehmertest.question12.value,
        document.unternehmertest.question13.value,
        document.unternehmertest.question15.value,
        document.unternehmertest.question16.value,
        document.unternehmertest.question17.value,
        document.unternehmertest.question18.value,
        document.unternehmertest.question20.value,
        document.unternehmertest.question21.value,
        document.unternehmertest.question22.value,
        document.unternehmertest.question23.value,
        document.unternehmertest.question24.value,
        document.unternehmertest.question27.value,
        document.unternehmertest.question28.value,
    ]
    var questionsWithNegativePoints = [
        document.unternehmertest.question6.value,
        document.unternehmertest.question14.value,
        document.unternehmertest.question19.value,
        document.unternehmertest.question25.value,
        document.unternehmertest.question26.value,
        document.unternehmertest.question29.value,
    ]
    

    if (q1 == "weiblich") {
        score += 3.06;
    } else if (q1 == "männlich") {
        score += 5.0;
    } else {    // divers
        score += 4.03;
    }

    switch (q2) {
        case "18":
          score += 1.7;
          break;
        case "25":
          score += 5.0;
          break;
        case "35":
          score += 2.86;
          break;
        case "45":
          score += 2.03;
          break;
        default:    // 55+
          score += 0.94;
    }

    switch (q3) {
        case "hauptschule":
            score += 0.32;
            break;
        case "realschule":
            score += 0.34;
            break;
        case "hochschulreife":
            score += 1.57;
            break;
        case "ausbildung":
            score += 0.6;
            break;
        case "bachelor":
            score += 3.0;
            break;
        case "master":
            score += 5.0;
            break;
        default:    // Promotion
            score += 2.31;
    }

    switch (q4) {
        case "Baden-Württemberg":
            score += 3.22;
            break;
        case "Bayern":
            score += 3.09;
            break;
        case "Berlin":
            score += 4.63;
            break;
        case "Brandenburg":
            score += 0.26;
            break;
        case "Bremen":
            score += 0.81;
            break;
        case "Hamburg":
            score += 0.15;
            break;
        case "Hessen":
            score += 0.19;
            break;
        case "Mecklenburg-Vorpommern":
            score += 0.24;
            break;
        case "Niedersachsen":
            score += 2.17;
            break;
        case "Nordrhein-Westfalen":
            score += 5.0;
            break;
        case "Rheinland-Pfalz":
            score += 0.45;
            break;
        case "Saarland":
            score += 0.24;
            break;
        case "Sachsen":
            score += 0.81;
            break;
        case "Sachsen-Anhalt":
            score += 0.47;
            break;
        case "Schleswig-Holstein":
            score += 1.1;
            break;
        default:    // Thüringen
            score += 0.26;
    }

    questionsWithStandardPoints.forEach(calc_standard);
    function calc_standard(value) {
        switch (value) {
            case "tvz":
                score += 3.0;
                break;
            case "tez":
                score += 2.0;
                break;
            case "tenz":
                score += 1.0;
                break;
            default:    // tgnz
                score += 0;
        }
    }

    questionsWithNegativePoints.forEach(calc_negative);
    function calc_negative(value) {
        switch (value) {
            case "tvz":
                score += 6.0;
                break;
            case "tez":
                score += 4.0;
                break;
            case "tenz":
                score -= 1.0;
                break;
            default:    // tgnz
                score -= 2.0;
        }
    }

    unternehmertest.style.display = "none";

    kommaScore = score/MAXSCORE*100;
    

    pScore = Math.round(score/MAXSCORE*100);

    if (pScore >= 80) {
        result.textContent = 'Super stark! Der Unternehmertest hat ' + pScore + '% ergeben.'
        resultPage.textContent = 'Da steckt einiges an Potential in dir. Ab zu uns in die Beratung und wir arbeiten gemeinsam an der Umsetzung deiner Idee!';
    } else if (pScore >= 60) {
        result.textContent = 'Sehr stark! Der Unternehmertest hat ' + pScore + '% ergeben.'
        resultPage.textContent = 'Ab zu uns in die Beratung und wir arbeiten gemeinsam an der Umsetzung deiner Idee.';
    } else if (pScore >= 40) {
        result.textContent = 'Yes, herzlichen Glückwunsch. Der Unternehmertest hat ' + pScore + '% ergeben.'
        resultPage.textContent = 'Komm zu uns in die Beratung und wir arbeiten gemeinsam an der Umsetzung deiner Idee.';
    } else if (pScore >= 35) {
        result.textContent = 'Herzlichen Glückwunsch! Der Unternehmentest hat ' + pScore + '% ergeben.'
        resultPage.textContent = 'Komm zu uns in die Beratung und wir arbeiten gemeinsam an der Umsetzung deiner Idee.';
    } else {
        result.textContent = 'Wow, herzlichen Glückwunsch. Der Unternehmertest hat ergeben, dass du zu 34% zu einem Unternehmer geeignet bist.'
        resultPage.textContent = 'Du willst wissen, was die ersten Schritte in der Realisierung sind? Dann klicke hier!'
    }

    result.style.textAlign = "center";
    result.style.fontWeight = "bold";

    resultPage.style.marginTop = "10px";
    resultPage.style.marginBottom = "30px";
    resultPage.style.textAlign = "center";

    furtherText.textContent = 'Du willst wissen, was die ersten Schritte in der Realisierung sind? Dann klicke hier!';
    furtherText.style.marginTop = "15px";
    furtherText.style.marginBottom = "15px";
    document.getElementById("furtherInfoButton").style.visibility = "visible";
}