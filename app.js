// Handles language change logic
function changeLanguage(lang) {
    const translations = {
        en: {
            mainTitle: "Securing your today and tomorrow",
            prepareTitle: "Prepare",
            applyTitle: "Apply",
            afterTitle: "After you apply",
            checkEligibility: "Check eligibility for benefits",
            getBenefitsEstimate: "Get a benefits estimate",
            planForRetirement: "Plan for retirement",
            applyForBenefits: "Apply for benefits",
            signUpForMedicare: "Sign up for Medicare",
            applyForSSI: "Apply for SSI",
            checkStatus: "Check application or appeal status",
            appealDecision: "Appeal a decision we made",
            benefitsDropdown: "Benefits",
            medicareDropdown: "Medicare",
            cardRecordDropdown: "Card & Record",
            languageDropdown: "Language",
            signInBtn: "Sign In",
            footerText: "© 2024 Biotraces. All rights reserved. | Privacy Policy | Terms of Service",
        },
        pa: {
            mainTitle: "ਤੁਹਾਡੇ ਅੱਜ ਅਤੇ ਕੱਲ੍ਹ ਦੀ ਸੁਰੱਖਿਆ ਕਰਨਾ",
            prepareTitle: "ਤਿਆਰ ਹੋਣਾ",
            applyTitle: "ਅਰਜ਼ੀ ਦੇਣਾ",
            afterTitle: "ਤੁਸੀਂ ਅਰਜ਼ੀ ਦੇਣ ਤੋਂ ਬਾਅਦ",
            checkEligibility: "ਲਾਭਾਂ ਲਈ ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ",
            getBenefitsEstimate: "ਲਾਭਾਂ ਦੀ ਅੰਦਾਜ਼ਾ ਲਗਾਓ",
            planForRetirement: "ਰਿਟਾਇਰਮੈਂਟ ਦੀ ਯੋਜਨਾ ਬਣਾਓ",
            applyForBenefits: "ਲਾਭਾਂ ਲਈ ਅਰਜ਼ੀ ਦਿਓ",
            signUpForMedicare: "ਮੀਡੀਕੇਅਰ ਲਈ ਸਾਈਨ ਅਪ ਕਰੋ",
            applyForSSI: "SSI ਲਈ ਅਰਜ਼ੀ ਦਿਓ",
            checkStatus: "ਅਰਜ਼ੀ ਜਾਂ ਅਪੀਲ ਦੀ ਸਥਿਤੀ ਦੀ ਜਾਂਚ ਕਰੋ",
            appealDecision: "ਅਸੀਂ ਕੀਤੇ ਫੈਸਲੇ ਦੀ ਅਪੀਲ ਕਰੋ",
            benefitsDropdown: "ਲਾਭ",
            medicareDropdown: "ਮੀਡੀਕੇਅਰ",
            cardRecordDropdown: "ਕਾਰਡ & ਰਿਕਾਰਡ",
            languageDropdown: "ਭਾਸ਼ਾ",
            signInBtn: "ਸਾਈਨ ਇਨ",
            footerText: "© 2024 Biotraces. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ। | ਪ੍ਰਾਈਵੇਟ ਪਾਲਿਸੀ | ਸੇਵਾ ਦੇ ਸ਼ਰਤਾਂ",
        },
        te: {
            mainTitle: "మీ నేటి మరియు రేపు భద్రత",
            prepareTitle: "తయారు చేయండి",
            applyTitle: "అర్జీ చేయండి",
            afterTitle: "మీరు అర్జీ చేసిన తర్వాత",
            checkEligibility: "లాభాల అర్హతను తనిఖీ చేయండి",
            getBenefitsEstimate: "లాభాల అంచనా పొందండి",
            planForRetirement: "విరామవేతనం కోసం ప్రణాళిక చేయండి",
            applyForBenefits: "లాభాల కోసం దరఖాస్తు చేయండి",
            signUpForMedicare: "మెడికేర్‌లో సైన్ అప్ చేయండి",
            applyForSSI: "ఎస్ఎస్ఐ కోసం దరఖాస్తు చేయండి",
            checkStatus: "అప్లికేషన్ లేదా అప్పీల్ స్థితిని తనిఖీ చేయండి",
            appealDecision: "మేము తీసుకున్న నిర్ణయాన్ని అప్పీల్ చేయండి",
            benefitsDropdown: "లాభాలు",
            medicareDropdown: "మెడికేర్",
            cardRecordDropdown: "కార్డ్ & రికార్డ్",
            languageDropdown: "భాష",
            signInBtn: "సైన్ ఇన్",
            footerText: "© 2024 Biotraces. అన్ని హక్కులు రిజర్వు చేసాయి | ప్రైవసీ పాలసీ | సేవా షరతులు",
        },
        hi: {
            mainTitle: "आपके आज और कल की सुरक्षा",
            prepareTitle: "तैयार करें",
            applyTitle: "आवेदन करें",
            afterTitle: "आपके आवेदन के बाद",
            checkEligibility: "लाभों के लिए पात्रता जांचें",
            getBenefitsEstimate: "लाभों का अनुमान लगाएं",
            planForRetirement: "सेवानिवृत्ति की योजना बनाएं",
            applyForBenefits: "लाभों के लिए आवेदन करें",
            signUpForMedicare: "मेडिकेयर के लिए साइन अप करें",
            applyForSSI: "SSI के लिए आवेदन करें",
            checkStatus: "आवेदन या अपील की स्थिति जांचें",
            appealDecision: "हमारे द्वारा लिए गए निर्णय की अपील करें",
            benefitsDropdown: "लाभ",
            medicareDropdown: "मेडिकेयर",
            cardRecordDropdown: "कार्ड और रिकॉर्ड",
            languageDropdown: "भाषा",
            signInBtn: "साइन इन करें",
            footerText: "© 2024 Biotraces. सर्वाधिकार सुरक्षित। | गोपनीयता नीति | सेवा की शर्तें",
        
    }
      
    };

    const langData = translations[lang];

    // Update the text on the page based on selected language
    document.getElementById("mainTitle").innerText = langData.mainTitle;
    document.getElementById("prepareTitle").innerText = langData.prepareTitle;
    document.getElementById("applyTitle").innerText = langData.applyTitle;
    document.getElementById("afterTitle").innerText = langData.afterTitle;

    document.getElementById("checkEligibilityBtn").innerText = langData.checkEligibility;
    document.getElementById("getBenefitsEstimateBtn").innerText = langData.getBenefitsEstimate;
    document.getElementById("planForRetirementBtn").innerText = langData.planForRetirement;
    document.getElementById("applyForBenefitsBtn").innerText = langData.applyForBenefits;
    document.getElementById("signUpMedicareBtn").innerText = langData.signUpForMedicare;
    document.getElementById("applyForSSIBtn").innerText = langData.applyForSSI;
    document.getElementById("checkStatusBtn").innerText = langData.checkStatus;
    document.getElementById("appealDecisionBtn").innerText = langData.appealDecision;

    document.getElementById("benefitsDropdown").innerText = langData.benefitsDropdown;
    document.getElementById("medicareDropdown").innerText = langData.medicareDropdown;
    document.getElementById("cardRecordDropdown").innerText = langData.cardRecordDropdown;
    document.getElementById("languageDropdown").innerText = langData.languageDropdown;
    document.getElementById("signInBtn").innerText = langData.signInBtn;
    document.getElementById("footerText").innerText = langData.footerText;
}

// Handle opening and closing the modal
function openSignInModal() {
    document.getElementById('signInModal').style.display = 'block';
}

function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}
