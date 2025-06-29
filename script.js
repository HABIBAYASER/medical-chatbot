// بيانات الأطباء والأعراض
const SYMPTOMS_TO_SPECIALTY = {
  "ألم في الصدر": "أمراض القلب",
  "الم في الصدر": "أمراض القلب",
  "وجع في الصدر": "أمراض القلب",
  "ضيق في التنفس": "أمراض القلب",
  "ضيق تنفس": "أمراض القلب",
  خفقان: "أمراض القلب",
  "خفقان القلب": "أمراض القلب",
  "ألم في القلب": "أمراض القلب",
  "ضغط دم مرتفع": "أمراض القلب",
  "ضغط عالي": "أمراض القلب",

  صداع: "مخ وأعصاب",
  "صداع شديد": "مخ وأعصاب",
  "وجع راس": "مخ وأعصاب",
  "وجع في الراس": "مخ وأعصاب",
  دوخة: "مخ وأعصاب",
  دوخه: "مخ وأعصاب",
  دوار: "مخ وأعصاب",
  تنميل: "مخ وأعصاب",
  رعشة: "مخ وأعصاب",

  "حكة في الجلد": "جلدية وتجميل",
  حكه: "جلدية وتجميل",
  حكة: "جلدية وتجميل",
  هرش: "جلدية وتجميل",
  "طفح جلدي": "جلدية وتجميل",
  طفح: "جلدية وتجميل",
  "حبوب في الوجه": "جلدية وتجميل",
  حبوب: "جلدية وتجميل",
  "تساقط الشعر": "جلدية وتجميل",

  "ألم في الأذن": "أنف وأذن وحنجرة",
  "الم في الاذن": "أنف وأذن وحنجرة",
  "وجع في الاذن": "أنف وأذن وحنجرة",
  "التهاب الحلق": "أنف وأذن وحنجرة",
  "وجع في الحلق": "أنف وأذن وحنجرة",
  "انسداد الأنف": "أنف وأذن وحنجرة",
  زكام: "أنف وأذن وحنجرة",
  رشح: "أنف وأذن وحنجرة",
  "بحة في الصوت": "أنف وأذن وحنجرة",

  "ألم في البطن": "باطنة عامة",
  "الم في البطن": "باطنة عامة",
  "وجع في البطن": "باطنة عامة",
  "وجع بطن": "باطنة عامة",
  مغص: "باطنة عامة",
  غثيان: "باطنة عامة",
  استفراغ: "باطنة عامة",
  قيء: "باطنة عامة",
  إسهال: "باطنة عامة",
  اسهال: "باطنة عامة",
  إمساك: "باطنة عامة",
  حمى: "باطنة عامة",
  سخونة: "باطنة عامة",
  "تعب عام": "باطنة عامة",
  تعب: "باطنة عامة",

  "تأخر الدورة الشهرية": "نساء وتوليد",
  "تاخر الدورة": "نساء وتوليد",
  "ألم أثناء الدورة": "نساء وتوليد",
  "الم الدورة": "نساء وتوليد",
  "إفرازات مهبلية": "نساء وتوليد",
  افرازات: "نساء وتوليد",
  "ألم في الحوض": "نساء وتوليد",
  "أعراض الحمل": "نساء وتوليد",

  "حمى عند الطفل": "أطفال وحديثي الولادة",
  "سخونة عند الطفل": "أطفال وحديثي الولادة",
  "الطفل عنده سخونة": "أطفال وحديثي الولادة",
  "سعال عند الطفل": "أطفال وحديثي الولادة",
  "الطفل بيكح": "أطفال وحديثي الولادة",
  "إسهال عند الطفل": "أطفال وحديثي الولادة",
  "قيء عند الطفل": "أطفال وحديثي الولادة",
  "مغص عند الطفل": "أطفال وحديثي الولادة",
}

const MEDICAL_DATA = [
  // أطباء القلب (10 أطباء)
  {
    name: "د. أحمد سامي حسن",
    specialty: "أمراض القلب",
    schedule: "السبت والثلاثاء 5م–9م",
    consultation_price: 250,
    call_price: 150,
    phone: "16676",
    address: "المعادي - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/test1",
  },
  {
    name: "د. فاطمة محمود عبد السلام",
    specialty: "أمراض القلب",
    schedule: "الأحد والخميس 4م–8م",
    consultation_price: 260,
    call_price: 160,
    phone: "16676",
    address: "مدينة نصر - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/test2",
  },
  {
    name: "د. هشام عبد الله يوسف",
    specialty: "أمراض القلب",
    schedule: "يوميًا عدا الجمعة 3م–7م",
    consultation_price: 270,
    call_price: 140,
    phone: "16676",
    address: "الزقازيق - الشرقية",
    url: "https://www.vezeeta.com/ar/dr/test3",
  },
  {
    name: "د. منى أحمد علي",
    specialty: "أمراض القلب",
    schedule: "الإثنين والأربعاء 2م–6م",
    consultation_price: 280,
    call_price: 170,
    phone: "16676",
    address: "الجيزة",
    url: "https://www.vezeeta.com/ar/dr/test4",
  },
  {
    name: "د. محمد حسن إبراهيم",
    specialty: "أمراض القلب",
    schedule: "السبت والأحد 1م–5م",
    consultation_price: 290,
    call_price: 180,
    phone: "16676",
    address: "الإسكندرية",
    url: "https://www.vezeeta.com/ar/dr/test5",
  },
  {
    name: "د. نادية سعد محمود",
    specialty: "أمراض القلب",
    schedule: "الثلاثاء والجمعة 4م–8م",
    consultation_price: 300,
    call_price: 190,
    phone: "16676",
    address: "أسوان",
    url: "https://www.vezeeta.com/ar/dr/test6",
  },
  {
    name: "د. خالد عبد الرحمن",
    specialty: "أمراض القلب",
    schedule: "الأحد والثلاثاء 3م–7م",
    consultation_price: 310,
    call_price: 200,
    phone: "16676",
    address: "المنيا",
    url: "https://www.vezeeta.com/ar/dr/test7",
  },
  {
    name: "د. سمر فاروق أحمد",
    specialty: "أمراض القلب",
    schedule: "الإثنين والخميس 5م–9م",
    consultation_price: 320,
    call_price: 210,
    phone: "16676",
    address: "طنطا",
    url: "https://www.vezeeta.com/ar/dr/test8",
  },
  {
    name: "د. عادل محمد سليم",
    specialty: "أمراض القلب",
    schedule: "السبت والأربعاء 2م–6م",
    consultation_price: 330,
    call_price: 220,
    phone: "16676",
    address: "بنها",
    url: "https://www.vezeeta.com/ar/dr/test9",
  },
  {
    name: "د. ريهام عصام الدين",
    specialty: "أمراض القلب",
    schedule: "الأحد والجمعة 6م–10م",
    consultation_price: 340,
    call_price: 230,
    phone: "16676",
    address: "دمياط",
    url: "https://www.vezeeta.com/ar/dr/test10",
  },

  // أطباء المخ والأعصاب (10 أطباء)
  {
    name: "د. عمر هشام عبد العزيز",
    specialty: "مخ وأعصاب",
    schedule: "كل يوم ٦م–١٠م",
    consultation_price: 300,
    call_price: 140,
    phone: "16676",
    address: "مدينة نصر - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/omar-hesham",
  },
  {
    name: "د. نجلاء محمد صادق",
    specialty: "مخ وأعصاب",
    schedule: "السبت والثلاثاء ١م–٤م",
    consultation_price: 310,
    call_price: 130,
    phone: "16676",
    address: "الزيتون - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/naglaa-sadek",
  },
  {
    name: "د. محمد علي رشدي",
    specialty: "مخ وأعصاب",
    schedule: "الأحد والأربعاء ٢م–٦م",
    consultation_price: 290,
    call_price: 120,
    phone: "16676",
    address: "الإسكندرية",
    url: "https://www.vezeeta.com/ar/dr/mohamed-rashdy",
  },
  {
    name: "د. هالة سمير محمد",
    specialty: "مخ وأعصاب",
    schedule: "الإثنين والخميس ٣م–٧م",
    consultation_price: 320,
    call_price: 150,
    phone: "16676",
    address: "الفيوم",
    url: "https://www.vezeeta.com/ar/dr/hala-samir",
  },
  {
    name: "د. أسامة فتحي عبد الله",
    specialty: "مخ وأعصاب",
    schedule: "السبت والجمعة ٤م–٨م",
    consultation_price: 330,
    call_price: 160,
    phone: "16676",
    address: "أسيوط",
    url: "https://www.vezeeta.com/ar/dr/osama-fathy",
  },
  {
    name: "د. دينا أحمد حسن",
    specialty: "مخ وأعصاب",
    schedule: "الثلاثاء والأربعاء ٥م–٩م",
    consultation_price: 340,
    call_price: 170,
    phone: "16676",
    address: "سوهاج",
    url: "https://www.vezeeta.com/ar/dr/dina-ahmed",
  },
  {
    name: "د. طارق محمود علي",
    specialty: "مخ وأعصاب",
    schedule: "الأحد والإثنين ١م–٥م",
    consultation_price: 350,
    call_price: 180,
    phone: "16676",
    address: "قنا",
    url: "https://www.vezeeta.com/ar/dr/tarek-mahmoud",
  },
  {
    name: "د. مروة سعد إبراهيم",
    specialty: "مخ وأعصاب",
    schedule: "الخميس والجمعة ٢م–٦م",
    consultation_price: 360,
    call_price: 190,
    phone: "16676",
    address: "الأقصر",
    url: "https://www.vezeeta.com/ar/dr/marwa-saad",
  },
  {
    name: "د. يحيى عبد الحميد",
    specialty: "مخ وأعصاب",
    schedule: "السبت والثلاثاء ٦م–١٠م",
    consultation_price: 370,
    call_price: 200,
    phone: "16676",
    address: "البحر الأحمر",
    url: "https://www.vezeeta.com/ar/dr/yahya-abdel",
  },
  {
    name: "د. شيماء محمد فاروق",
    specialty: "مخ وأعصاب",
    schedule: "الأحد والأربعاء ٣م–٧م",
    consultation_price: 380,
    call_price: 210,
    phone: "16676",
    address: "مطروح",
    url: "https://www.vezeeta.com/ar/dr/shimaa-mohamed",
  },

  // باقي الأطباء...
  {
    name: "د. سارة محمد عبد القادر",
    specialty: "جلدية وتجميل",
    schedule: "الإثنين والخميس ٢م–٦م",
    consultation_price: 220,
    call_price: null,
    phone: "16676",
    address: "سموحة - الإسكندرية",
    url: "https://www.vezeeta.com/ar/dr/sara-mohamed",
  },
  {
    name: "د. يوسف جمال عبد الله",
    specialty: "باطنة عامة",
    schedule: "السبت–الأربعاء ٣م–٩م",
    consultation_price: 180,
    call_price: 120,
    phone: "16676",
    address: "شبرا - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/youssef-gamal",
  },
  {
    name: "د. نهى محمود عبد اللطيف",
    specialty: "نساء وتوليد",
    schedule: "السبت والإثنين ١م–٥م",
    consultation_price: 190,
    call_price: 110,
    phone: "16676",
    address: "٦ أكتوبر - الجيزة",
    url: "https://www.vezeeta.com/ar/dr/noha-mahmoud",
  },
  {
    name: "د. مي عبد الفتاح",
    specialty: "أطفال وحديثي الولادة",
    schedule: "الأحد والثلاثاء ٤م–٨م",
    consultation_price: 200,
    call_price: 100,
    phone: "16676",
    address: "الهرم - الجيزة",
    url: "https://www.vezeeta.com/ar/dr/mai-abdelfattah",
  },
]

// حالة المحادثة
let chatState = {
  step: "symptoms",
  specialty: "",
  availableDoctors: [],
  selectedDoctor: null,
  availableAppointments: [],
  selectedAppointment: "",
}

// عناصر DOM
const welcomeScreen = document.getElementById("welcome-screen")
const chatArea = document.getElementById("chat-area")
const messagesContainer = document.getElementById("messages-container")
const userInput = document.getElementById("user-input")
const sendBtn = document.getElementById("send-btn")
const loading = document.getElementById("loading")

// وظائف المساعدة
function selectExample(symptom) {
  userInput.value = symptom
  sendMessage()
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage()
  }
}

function showChatArea() {
  welcomeScreen.style.display = "none"
  chatArea.style.display = "block"
}

function addMessage(content, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${isUser ? "user" : "bot"}`

  const avatarDiv = document.createElement("div")
  avatarDiv.className = "message-avatar"
  avatarDiv.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>'

  const contentDiv = document.createElement("div")
  contentDiv.className = "message-content"
  contentDiv.textContent = content

  if (isUser) {
    messageDiv.appendChild(contentDiv)
    messageDiv.appendChild(avatarDiv)
  } else {
    messageDiv.appendChild(avatarDiv)
    messageDiv.appendChild(contentDiv)
  }

  messagesContainer.appendChild(messageDiv)
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

function showLoading() {
  loading.style.display = "block"
  messagesContainer.appendChild(loading)
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

function hideLoading() {
  loading.style.display = "none"
}

function generateAppointments() {
  const appointments = []
  const today = new Date()
  const days = ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]

  for (let i = 1; i <= 4; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dayName = days[date.getDay()]
    const timeSlots = ["10:00 صباحاً", "2:00 مساءً", "6:00 مساءً"]
    const timeSlot = timeSlots[Math.floor(Math.random() * timeSlots.length)]
    const appointment = `${dayName} ${date.toLocaleDateString("ar-EG")} - ${timeSlot}`
    appointments.push(appointment)
  }

  return appointments
}

function processUserMessage(userInput) {
  const userInputLower = userInput.toLowerCase()

  if (chatState.step === "symptoms") {
    // البحث عن التخصص
    let detectedSpecialty = null
    for (const [symptom, specialty] of Object.entries(SYMPTOMS_TO_SPECIALTY)) {
      if (userInputLower.includes(symptom)) {
        detectedSpecialty = specialty
        break
      }
    }

    if (!detectedSpecialty) {
      return "لم أتمكن من تحديد التخصص المناسب. جرب كتابة أعراض أكثر وضوحاً مثل: صداع، ألم في الصدر، حكة في الجلد"
    }

    // البحث عن الأطباء
    const availableDoctors = MEDICAL_DATA.filter((doctor) => doctor.specialty === detectedSpecialty)

    if (availableDoctors.length === 0) {
      return `عذراً، لا يوجد أطباء متاحون في تخصص ${detectedSpecialty} حالياً.`
    }

    chatState.step = "doctor_selection"
    chatState.specialty = detectedSpecialty
    chatState.availableDoctors = availableDoctors

    let response = `✅ تم تحديد التخصص: ${detectedSpecialty}\n\n`
    response += `الأطباء المتاحون (${availableDoctors.length} طبيب):\n\n`

    availableDoctors.forEach((doctor, index) => {
      const callInfo = doctor.call_price ? `📞 ${doctor.call_price} جنيه` : "📞 غير متاحة"
      response += `${index + 1}. 👨‍⚕️ ${doctor.name}\n`
      response += `   📍 ${doctor.address}\n`
      response += `   🕐 ${doctor.schedule}\n`
      response += `   💰 ${doctor.consultation_price} جنيه | ${callInfo}\n\n`
    })

    response += `اختر رقم الطبيب (من 1 إلى ${availableDoctors.length}):`
    return response
  } else if (chatState.step === "doctor_selection") {
    const doctorIndex = Number.parseInt(userInput.trim()) - 1

    if (isNaN(doctorIndex) || doctorIndex < 0 || doctorIndex >= chatState.availableDoctors.length) {
      return `❌ من فضلك اختر رقماً صحيحاً من 1 إلى ${chatState.availableDoctors.length}`
    }

    chatState.selectedDoctor = chatState.availableDoctors[doctorIndex]
    chatState.availableAppointments = generateAppointments()
    chatState.step = "appointment_selection"

    let response = `✅ تم اختيار: ${chatState.selectedDoctor.name}\n\n`
    response += `📅 المواعيد المتاحة:\n\n`

    chatState.availableAppointments.forEach((appointment, index) => {
      response += `${index + 1}. 🕐 ${appointment}\n`
    })

    response += `\nاختر رقم الموعد (من 1 إلى ${chatState.availableAppointments.length}):`
    return response
  } else if (chatState.step === "appointment_selection") {
    const appointmentIndex = Number.parseInt(userInput.trim()) - 1

    if (isNaN(appointmentIndex) || appointmentIndex < 0 || appointmentIndex >= chatState.availableAppointments.length) {
      return `❌ من فضلك اختر رقماً صحيحاً من 1 إلى ${chatState.availableAppointments.length}`
    }

    chatState.selectedAppointment = chatState.availableAppointments[appointmentIndex]
    chatState.step = "booking_confirmation"

    return `✅ ملخص الحجز:

👨‍⚕️ الطبيب: ${chatState.selectedDoctor.name}
🏥 التخصص: ${chatState.selectedDoctor.specialty}
📅 الموعد: ${chatState.selectedAppointment}
📍 العنوان: ${chatState.selectedDoctor.address}
💰 السعر: ${chatState.selectedDoctor.consultation_price} جنيه

هل تريد تأكيد الحجز؟ (نعم/لا)`
  } else if (chatState.step === "booking_confirmation") {
    const userResponse = userInput.trim().toLowerCase()

    if (["نعم", "yes", "موافق", "تأكيد"].includes(userResponse)) {
      const bookingId = `BK${Math.floor(Math.random() * 90000) + 10000}`

      // حفظ بيانات الطبيب قبل إعادة التعيين
      const doctorName = chatState.selectedDoctor.name
      const doctorAddress = chatState.selectedDoctor.address
      const doctorPrice = chatState.selectedDoctor.consultation_price
      const doctorPhone = chatState.selectedDoctor.phone
      const selectedAppointment = chatState.selectedAppointment

      // إعادة تعيين الحالة
      chatState = {
        step: "symptoms",
        specialty: "",
        availableDoctors: [],
        selectedDoctor: null,
        availableAppointments: [],
        selectedAppointment: "",
      }

      return `🎉 تم تأكيد الحجز بنجاح!

🎫 رقم الحجز: ${bookingId}
👨‍⚕️ الطبيب: ${doctorName}
📅 الموعد: ${selectedAppointment}
📍 العنوان: ${doctorAddress}
💰 المبلغ: ${doctorPrice} جنيه
📞 الهاتف: ${doctorPhone}

⚠️ تعليمات مهمة:
• احضر قبل الموعد بـ 15 دقيقة
• احتفظ برقم الحجز للمراجعة
• أحضر الهوية الشخصية

شكراً لاستخدام خدمتنا! 🙏

يمكنك بدء محادثة جديدة لحجز موعد آخر.`
    } else if (["لا", "no", "إلغاء"].includes(userResponse)) {
      // إعادة تعيين الحالة
      chatState = {
        step: "symptoms",
        specialty: "",
        availableDoctors: [],
        selectedDoctor: null,
        availableAppointments: [],
        selectedAppointment: "",
      }

      return `❌ تم إلغاء الحجز.

يمكنك بدء محادثة جديدة إذا كنت تريد حجز موعد آخر.`
    } else {
      return "❓ من فضلك أجب بـ 'نعم' أو 'لا'"
    }
  }

  return "ادخل الأعراض التي تعاني منها:"
}

function sendMessage() {
  const message = userInput.value.trim()
  if (!message) return

  // إظهار منطقة الشات
  showChatArea()

  // إضافة رسالة المستخدم
  addMessage(message, true)

  // مسح الإدخال
  userInput.value = ""

  // تعطيل الزر
  sendBtn.disabled = true

  // إظهار التحميل
  showLoading()

  // محاكاة التأخير
  setTimeout(() => {
    hideLoading()

    // معالجة الرسالة
    const response = processUserMessage(message)

    // إضافة رد البوت
    addMessage(response)

    // تفعيل الزر
    sendBtn.disabled = false

    // التركيز على الإدخال
    userInput.focus()
  }, 1500)
}

// تفعيل التركيز على الإدخال عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  userInput.focus()
})
