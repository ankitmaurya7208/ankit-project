function createDhanYodhaGoogleForm() {
  // Create Google Form
  var form = FormApp.create('Dhan Yodha: Digital Financial Literacy & Safe Banking Survey');
  
  form.setDescription(
    'Community Engagement Project Survey on Safe Online Banking Awareness, Cyber Fraud Prevention, and Emergency Helpline Literacy.\n\n' +
    'Initiative: Dhan Yodha (धन योद्धा)\n' +
    'Department of Computer Science & Engineering\n' +
    'Note: No real bank account numbers, passwords, or PINs are requested.'
  );
  
  form.setConfirmationMessage(
    'Thank you for completing the Dhan Yodha Survey! Your response has been recorded.\n\n' +
    'Remember: Never share your OTP, UPI PIN, or CVV with anyone. Report cyber fraud within 1-2 hours on Helpline 1930.'
  );
  
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  // SECTION 1: DEMOGRAPHICS
  var itemSec1 = form.addSectionHeaderItem();
  itemSec1.setTitle('Section 1: Demographic Information');
  itemSec1.setHelpText('Please provide basic demographic details for research classification.');

  // Q1: Name
  var q1 = form.addTextItem();
  q1.setTitle('1. Full Name');
  q1.setRequired(true);

  // Q2: Age Group
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Age Group');
  q2.setChoices([
    q2.createChoice('Under 18 years'),
    q2.createChoice('18 – 25 years'),
    q2.createChoice('26 – 40 years'),
    q2.createChoice('41 – 60 years'),
    q2.createChoice('Above 60 years (Senior Citizen)')
  ]);
  q2.setRequired(true);

  // Q3: Occupation
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Primary Occupation / Status');
  q3.setChoices([
    q3.createChoice('Student'),
    q3.createChoice('Merchant / Small Business Owner'),
    q3.createChoice('Salaried Employee (Private / Govt)'),
    q3.createChoice('Senior Citizen / Retired'),
    q3.createChoice('Homemaker'),
    q3.createChoice('Other')
  ]);
  q3.setRequired(true);

  // Q4: Banking Tools Used
  var q4 = form.addCheckboxItem();
  q4.setTitle('4. Which digital banking services do you use regularly? (Select all that apply)');
  q4.setChoices([
    q4.createChoice('UPI Applications (PhonePe, Google Pay, Paytm, BHIM)'),
    q4.createChoice('Mobile Banking Application (SBI YONO, HDFC Mobile, etc.)'),
    q4.createChoice('Internet Banking Website'),
    q4.createChoice('Debit / Credit Cards'),
    q4.createChoice('ATM Services Only'),
    q4.createChoice('Do not use digital banking')
  ]);
  q4.setRequired(true);


  // SECTION 2: BASELINE KNOWLEDGE
  var itemSec2 = form.addSectionHeaderItem();
  itemSec2.setTitle('Section 2: Digital Banking Security Knowledge');
  itemSec2.setHelpText('Test your understanding of safe online banking practices.');

  // Q5: UPI PIN Rule
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. When RECEIVING money via UPI (e.g. refund, pension, or buyer payment), is it required to enter your UPI PIN?');
  q5.setChoices([
    q5.createChoice('Yes, PIN is always required to receive money'),
    q5.createChoice('NO! UPI PIN is ONLY required for SENDING money / deducting funds'),
    q5.createChoice('Only if the payment is above ₹1,000'),
    q5.createChoice('Don\'t know')
  ]);
  q5.setRequired(true);

  // Q6: Helpline 1930
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. What is the official 24x7 National Cyber Crime Emergency Helpline number in India for reporting financial fraud?');
  q6.setChoices([
    q6.createChoice('100'),
    q6.createChoice('112'),
    q6.createChoice('1930'),
    q6.createChoice('1800-BANK-HELP')
  ]);
  q6.setRequired(true);

  // Q7: Vishing / Threat Calls
  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Have you ever received a call or SMS threatening SIM card blocking, electricity disconnection, or bank account suspension within 2 hours unless you update KYC?');
  q7.setChoices([
    q7.createChoice('Yes, and I followed their instructions'),
    q7.createChoice('Yes, but I suspected fraud and ignored/blocked the caller'),
    q7.createChoice('No, I have never received such messages')
  ]);
  q7.setRequired(true);

  // Q8: QR Code Fraud
  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. If an online buyer sends a QR code stating "Scan to Receive Payment into Your Account", what will happen if you scan it and enter your PIN?');
  q8.setChoices([
    q8.createChoice('Money will be credited to my account'),
    q8.createChoice('Money will be DEBITED (stolen) from my bank account!'),
    q8.createChoice('The payment will be cancelled'),
    q8.createChoice('Don\'t know')
  ]);
  q8.setRequired(true);

  // Q9: OTP Sharing
  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Can a legitimate bank official or customer care representative ask you to share your OTP or Card CVV over phone?');
  q9.setChoices([
    q9.createChoice('Yes, if they need to verify my identity'),
    q9.createChoice('NO NEVER! Bank officials NEVER ask for OTP, CVV, or PIN'),
    q9.createChoice('Only during account opening')
  ]);
  q9.setRequired(true);

  // Q10: Phishing URLs
  var q10 = form.addMultipleChoiceItem();
  q10.setTitle('10. If an SMS asks you to update your bank PAN card by clicking on "http://sbi-kyc-update.online-info.top", is this link safe?');
  q10.setChoices([
    q10.createChoice('Yes, because it contains the word "sbi"'),
    q10.createChoice('NO! It is a fake Phishing link designed to steal login credentials'),
    q10.createChoice('Safe if it opens in Chrome')
  ]);
  q10.setRequired(true);


  // SECTION 3: BEHAVIORAL & EMERGENCY PROTOCOLS
  var itemSec3 = form.addSectionHeaderItem();
  itemSec3.setTitle('Section 3: Security Practices & Emergency Awareness');
  itemSec3.setHelpText('Evaluate your emergency reporting knowledge and security habits.');

  // Q11: Golden Hour
  var q11 = form.addMultipleChoiceItem();
  q11.setTitle('11. What is the ideal time window ("Golden Hour") to report cyber financial fraud to 1930 to freeze stolen funds?');
  q11.setChoices([
    q11.createChoice('Within 1 to 2 hours of the incident'),
    q11.createChoice('Within 24 hours'),
    q11.createChoice('Within 7 days'),
    q11.createChoice('Time doesn\'t matter')
  ]);
  q11.setRequired(true);

  // Q12: Remote Access Software
  var q12 = form.addMultipleChoiceItem();
  q12.setTitle('12. If a customer service agent asks you to install AnyDesk, TeamViewer, or QuickSupport to fix a payment error, what should you do?');
  q12.setChoices([
    q12.createChoice('Install it immediately'),
    q12.createChoice('REFUSE & Disconnect! These apps allow scammers to view your screen and steal OTPs'),
    q12.createChoice('Install but don\'t share the password')
  ]);
  q12.setRequired(true);


  // SECTION 4: INTERVENTION FEEDBACK
  var itemSec4 = form.addSectionHeaderItem();
  itemSec4.setTitle('Section 4: Dhan Yodha Awareness Feedback');
  itemSec4.setHelpText('Feedback on the Dhan Yodha awareness workshop and digital portal.');

  // Q13: Confidence Rating
  var q13 = form.addScaleItem();
  q13.setTitle('13. How confident do you now feel in identifying fraudulent payment requests and bank phishing links?');
  q13.setBounds(1, 5);
  q13.setLabels('Not Confident', 'Extremely Confident');
  q13.setRequired(true);

  // Q14: Recommendation
  var q14 = form.addMultipleChoiceItem();
  q14.setTitle('14. Would you recommend the Dhan Yodha Safe Online Banking initiative to your family, neighbors, and colleagues?');
  q14.setChoices([
    q14.createChoice('Yes, definitely!'),
    q14.createChoice('Maybe'),
    q14.createChoice('No')
  ]);
  q14.setRequired(true);

  // Log Form Details
  var formUrl = form.getEditUrl();
  var publishedUrl = form.getPublishedUrl();
  
  Logger.log('✅ Google Form Created Successfully!');
  Logger.log('📝 Edit Link (Admin): ' + formUrl);
  Logger.log('🌐 Share Link (Public): ' + publishedUrl);
}
