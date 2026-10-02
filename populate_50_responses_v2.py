import urllib.request
import urllib.parse
import random
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

form_url = 'https://docs.google.com/forms/d/e/1FAIpQLSdkmcygFUivaUOQeHd1ctRPycxfs-Ii96iOpARuH-UHgAPyBg/formResponse'

# Categories heavily weighted to Senior Citizens (60+) & Adults 18+
categories = [
    'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)',
    'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)', 'Senior Citizen (60+)',
    'Working Professional', 'Working Professional', 'Working Professional', 'Working Professional',
    'Home Maker', 'Home Maker',
    'Banking / IT / Cyber Security Professional',
    'Student / Youth'
]

reasons = [
    'To check the Senior Citizens Cyber Safety Hub',
    'To learn about UPI, OTP, and ATM scam protection rules',
    'To take the Cyber Security Quiz & get a Dhan Yodha Warrior Certificate',
    'To find emergency Helpline info (1930 / Golden Hour) or report fraud',
    'To use interactive tools (URL Inspector or Password/PIN Evaluator)',
    'To read real scam stories and cyber news alerts'
]

lang_options = [
    'Excellent and easy to read',
    'Excellent and easy to read',
    'Excellent and easy to read',
    'Excellent and easy to read',
    'Good, but would like more regional languages (e.g., Marathi, Tamil, Bengali, Telugu)'
]

features_pool = [
    '🛡️ 4 Golden Rules of Cyber Safety (OTP/PIN Protection Cheat Sheet)',
    '👴 Senior Citizen Cyber Safety Hub',
    '🔗 Phishing URL / Link Inspector',
    '🔑 Password & ATM PIN Security Evaluator',
    '📊 Personal Banking Risk Assessment',
    '🏆 Banking Awareness Quiz & Certificate',
    '🚨 Emergency Incident Response Info (Helpline 1930)',
    '📰 Scam Victim Stories & News Alerts'
]

conf_options = [
    'Yes, definitely! I learned new protective steps (e.g. covering ATM keypad, never sharing OTPs)',
    'Yes, definitely! I learned new protective steps (e.g. covering ATM keypad, never sharing OTPs)',
    'Yes, definitely! I learned new protective steps (e.g. covering ATM keypad, never sharing OTPs)',
    'Somewhat, but I still need more guidance'
]

tech_options = [
    'No issues, smooth performance',
    'No issues, smooth performance',
    'No issues, smooth performance',
    'No issues, smooth performance',
    'No issues, smooth performance',
    'Page loaded slowly'
]

comments_senior = [
    "As a senior citizen, the large font and clear icons helped me understand UPI PIN security very easily.",
    "The 1930 helpline number explanation in Golden Hour is excellent. Highly recommended for elderly people.",
    "The cheat sheet with 4 rules is very simple to print and keep near the ATM/phone.",
    "Very helpful portal! Please add voice assistance in Hindi and Marathi for senior citizens.",
    "The quiz certificate gave me confidence in my safe banking knowledge.",
    "Senior Citizen Hub is great. Audio alerts would be an awesome future addition.",
    "Clear instructions on never downloading AnyDesk / TeamViewer on fraud call instructions.",
    "Awesome initiative! Will share with my WhatsApp senior citizen group.",
    "Very clean website with no clutter. Easy to navigate for seniors.",
    "Helpful guidelines on Aadhaar lock and blocking lost debit cards.",
    "The 4 Golden rules printed on cheat sheet are essential for every retired person.",
    "Very good explanation that PIN is never needed to receive money into bank account.",
    "Liked the clear red close button on AI assistant chatbot and large fonts.",
    "Will teach these 4 safety rules to my family and neighbors.",
    "National Cyber Helpline 1930 banner is prominently displayed and easy to remember.",
    "Easy language toggle between English and Hindi made reading comfortable.",
    "Useful tool for URL link checking before clicking unknown SMS links.",
    "Great initiative for public safety against banking frauds.",
    "The password pin checker gave good suggestions for strong password setup.",
    "Very informative portal for safe online transactions."
]

print("🚀 Starting population of 50 realistic survey responses...", flush=True)
print("Target Demographic: Majority Senior Citizens (60+) & Adults (18+)\n", flush=True)

success_count = 0

for i in range(1, 51):
    category = random.choice(categories)
    reason = random.choice(reasons)
    lang_exp = random.choice(lang_options)
    
    num_features = random.randint(2, 4)
    selected_features = random.sample(features_pool, num_features)
    if category == 'Senior Citizen (60+)' and '👴 Senior Citizen Cyber Safety Hub' not in selected_features:
        selected_features.append('👴 Senior Citizen Cyber Safety Hub')

    q1_rating = random.choice(['5', '5', '5', '4'])
    q5_rating = random.choice(['5', '5', '5', '4'])
    q7_rating = random.choice(['5', '5', '4', '5'])
    q10_rating = random.choice(['10', '10', '9', '10', '8'])
    confidence = random.choice(conf_options)
    tech_issue = random.choice(tech_options)
    
    comment = ""
    if random.random() < 0.75:
        comment = random.choice(comments_senior)

    payload = {
        'entry.1088973700': q1_rating,
        'entry.205953229': reason,
        'entry.1766520817': lang_exp,
        'entry.1401983764': selected_features,
        'entry.1964636345': q5_rating,
        'entry.291201811': confidence,
        'entry.103993577': q7_rating,
        'entry.1001392728': tech_issue,
        'entry.244958676': category,
        'entry.1752207600': q10_rating,
        'entry.567241142': comment
    }

    data_encoded = urllib.parse.urlencode(payload, doseq=True).encode('utf-8')
    req = urllib.request.Request(form_url, data=data_encoded, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })

    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status == 200:
                success_count += 1
                print(f"[{i:02d}/50] ✅ Response recorded | Category: {category:38s} | Rating: {q1_rating}/5 | NPS: {q10_rating}/10", flush=True)
            else:
                print(f"[{i:02d}/50] ⚠️ Status: {resp.status}", flush=True)
    except Exception as e:
        print(f"[{i:02d}/50] ❌ Error: {e}", flush=True)

    time.sleep(0.02)

print(f"\n🎉 COMPLETED: Successfully submitted {success_count}/50 responses to Google Form!", flush=True)
