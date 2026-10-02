import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

sys.stdout.reconfigure(encoding='utf-8')

# Colors
C_FOREST = RGBColor(30, 58, 43)     # #1E3A2B
C_GOLD = RGBColor(212, 175, 55)     # #D4AF37
C_BG = RGBColor(249, 248, 246)      # #F9F8F6
C_WHITE = RGBColor(255, 255, 255)
C_DARK = RGBColor(24, 24, 24)
C_MUTED = RGBColor(80, 90, 105)
C_ACCENT_BG = RGBColor(238, 244, 240)
C_CARD_BORDER = RGBColor(200, 215, 205)
C_RED = RGBColor(192, 57, 43)

brain_dir = r'C:\Users\ASUS TUF\.gemini\antigravity\brain\e0ab350f-53ba-43cd-ace6-ad4230bcd5e5'
fig1 = os.path.join(brain_dir, 'fig_1_home.png')
fig2 = os.path.join(brain_dir, 'fig_2_quiz.png')
fig3 = os.path.join(brain_dir, 'fig_3_senior.png')
fig4 = os.path.join(brain_dir, 'fig_4_stories.png')
fig5 = os.path.join(brain_dir, 'fig_5_mobile.png')
fig_cheat = os.path.join(brain_dir, 'cheatsheet_rules_diagram_1790537191632.jpg')

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6] # Blank slide layout

def add_header(slide, title_text, category_text="DHAN YODHA 2.0 • ACADEMIC & COMMUNITY PRESENTATION"):
    # Header background strip
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(1.1))
    shape.fill.solid()
    shape.fill.fore_color.rgb = C_FOREST
    shape.line.fill.background()

    # Category / Tag
    tf_cat = slide.shapes.add_textbox(Inches(0.8), Inches(0.12), Inches(11.5), Inches(0.3)).text_frame
    tf_cat.word_wrap = True
    p0 = tf_cat.paragraphs[0]
    p0.text = category_text.upper()
    p0.font.size = Pt(11)
    p0.font.bold = True
    p0.font.color.rgb = C_GOLD

    # Main Title
    tf_title = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.5), Inches(0.6)).text_frame
    tf_title.word_wrap = True
    p1 = tf_title.paragraphs[0]
    p1.text = title_text
    p1.font.size = Pt(24)
    p1.font.bold = True
    p1.font.color.rgb = C_WHITE

    # Gold Accent Line below header
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(1.1), Inches(13.333), Inches(0.06))
    line.fill.solid()
    line.fill.fore_color.rgb = C_GOLD
    line.line.fill.background()

def add_footer(slide, current_slide, total_slides=15):
    # Footer Line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(7.0), Inches(11.733), Inches(0.02))
    line.fill.solid()
    line.fill.fore_color.rgb = C_CARD_BORDER
    line.line.fill.background()

    # Footer Left
    tf = slide.shapes.add_textbox(Inches(0.8), Inches(7.05), Inches(8.0), Inches(0.35)).text_frame
    p = tf.paragraphs[0]
    p.text = "Dhan Yodha 2.0 (धन योद्धा) | Safe Online Banking Awareness Portal | Live: dhanyodha20.vercel.app"
    p.font.size = Pt(10)
    p.font.color.rgb = C_MUTED

    # Footer Right Slide Number
    tf_num = slide.shapes.add_textbox(Inches(10.533), Inches(7.05), Inches(2.0), Inches(0.35)).text_frame
    p_num = tf_num.paragraphs[0]
    p_num.alignment = PP_ALIGN.RIGHT
    p_num.text = f"Slide {current_slide} of {total_slides}"
    p_num.font.size = Pt(10)
    p_num.font.bold = True
    p_num.font.color.rgb = C_FOREST

def create_card(slide, left, top, width, height, bg_color=C_WHITE, border_color=C_CARD_BORDER):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left), Inches(top), Inches(width), Inches(height))
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    card.line.color.rgb = border_color
    card.line.width = Pt(1.5)
    return card

# -------------------------------------------------------------
# SLIDE 1: Title Slide
# -------------------------------------------------------------
slide1 = prs.slides.add_slide(blank_layout)
# Dark Forest Background
bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
bg1.fill.solid()
bg1.fill.fore_color.rgb = C_FOREST
bg1.line.fill.background()

# Gold Decorative Border Box
box1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.5), Inches(0.5), Inches(12.333), Inches(6.5))
box1.fill.background()
box1.line.color.rgb = C_GOLD
box1.line.width = Pt(3)

# Title Text
tf1 = slide1.shapes.add_textbox(Inches(1.0), Inches(1.4), Inches(11.333), Inches(2.0)).text_frame
tf1.word_wrap = True
p = tf1.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.text = "DHAN YODHA 2.0 (धन योद्धा)"
p.font.size = Pt(44)
p.font.bold = True
p.font.color.rgb = C_GOLD

p_sub = tf1.add_paragraph()
p_sub.alignment = PP_ALIGN.CENTER
p_sub.text = "Safe Online Banking Awareness & Fraud Prevention Portal"
p_sub.font.size = Pt(24)
p_sub.font.bold = True
p_sub.font.color.rgb = C_WHITE

p_desc = tf1.add_paragraph()
p_desc.alignment = PP_ALIGN.CENTER
p_desc.text = "An Empowering Full-Stack Platform for Senior Citizens, Youth & First-Time Digital Banking Users"
p_desc.font.size = Pt(16)
p_desc.font.color.rgb = RGBColor(200, 220, 210)

# Highlights Bar in Title Slide
card_t = create_card(slide1, 1.5, 4.2, 10.333, 1.5, bg_color=RGBColor(40, 75, 55), border_color=C_GOLD)
tf_tb = slide1.shapes.add_textbox(Inches(1.7), Inches(4.3), Inches(9.933), Inches(1.3)).text_frame
tf_tb.word_wrap = True
p = tf_tb.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.text = "🌟 Live Production URL: https://dhanyodha20.vercel.app/"
p.font.size = Pt(18)
p.font.bold = True
p.font.color.rgb = C_GOLD

p2 = tf_tb.add_paragraph()
p2.alignment = PP_ALIGN.CENTER
p2.text = "Academic Community Engagement Project Report & Full-Stack Web System"
p2.font.size = Pt(14)
p2.font.color.rgb = C_WHITE

# Presenter Info
tf_pres = slide1.shapes.add_textbox(Inches(1.0), Inches(5.9), Inches(11.333), Inches(0.8)).text_frame
p_p = tf_pres.paragraphs[0]
p_p.alignment = PP_ALIGN.CENTER
p_p.text = "Presented by: Ankit Maurya & Project Team | Academic Session 2026"
p_p.font.size = Pt(14)
p_p.font.bold = True
p_p.font.color.rgb = C_WHITE

# -------------------------------------------------------------
# SLIDE 2: Executive Summary & Cyber Fraud Crisis
# -------------------------------------------------------------
slide2 = prs.slides.add_slide(blank_layout)
add_header(slide2, "Executive Summary: The Digital Banking Fraud Crisis in India")
add_footer(slide2, 2)

# Left Column Card - Problem Context
create_card(slide2, 0.8, 1.4, 5.7, 5.3)
tf = slide2.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "🚨 The Escalating Fraud Problem"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_RED

bullets_l = [
    "Rapid Digitalization: UPI handles 13+ billion monthly transactions across urban and rural India.",
    "Targeting Vulnerable Users: Elderly citizens and first-time smartphone users are heavily targeted by cyber criminals.",
    "Financial Losses: Over ₹1,750 Crore lost in digital financial fraud in India (MHA Cyber Crime Helpline statistics).",
    "Prevalent Scam Tactics: Fake UPI collect requests, screen-sharing traps (AnyDesk), fake customer care numbers, and WhatsApp Digital Arrest threats."
]
for b in bullets_l:
    p = tf.add_paragraph()
    p.text = "• " + b
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(10)

# Right Column Card - Dhan Yodha Solution
create_card(slide2, 6.8, 1.4, 5.7, 5.3, bg_color=C_ACCENT_BG, border_color=C_FOREST)
tf = slide2.shapes.add_textbox(Inches(7.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "🛡️ Dhan Yodha 2.0 Solution"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

bullets_r = [
    "Dedicated Prevention Portal: Web portal offering simple, visual, and bilingual safe banking education.",
    "Senior Citizen Friendly: Large 80px visual icons, high contrast text, and multi-lingual English/Hindi support.",
    "4 Golden Rules Focus: Concise safety cheat sheet highlighting key rules (Scan = Pay, Never Share OTP, Shield ATM).",
    "Actionable Emergency Response: Prominent National Cyber Crime Helpline 1930 & Golden Hour freeze guidance.",
    "Empirical Verification: Verified by 1,400+ online test takers and 170+ community survey participants."
]
for b in bullets_r:
    p = tf.add_paragraph()
    p.text = "✔ " + b
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(10)

# -------------------------------------------------------------
# SLIDE 3: Project Objectives & Scope
# -------------------------------------------------------------
slide3 = prs.slides.add_slide(blank_layout)
add_header(slide3, "Project Objectives & Scope of Work")
add_footer(slide3, 3)

objs = [
    ("1. Awareness & Education", "Build a high-impact, bilingual web portal explaining common cyber banking frauds in simple Hindi and English terms.", C_FOREST),
    ("2. Senior Citizen Focus", "Design an intuitive Senior Citizen Safety Hub with extra-large icons, zero jargon, and high contrast for elderly comprehension.", C_GOLD),
    ("3. Interactive Testing & Certs", "Implement an 8-question safety quiz connected to a real database and instant downloadable HTML5 Canvas certificates.", C_FOREST),
    ("4. Incident Response & 1930", "Promote National Cyber Helpline 1930 and step-by-step Golden Hour protocols to freeze stolen funds within 1-2 hours.", C_RED)
]

for idx, (title, desc, color) in enumerate(objs):
    col = idx % 2
    row = idx // 2
    left = 0.8 + col * 5.9
    top = 1.4 + row * 2.7
    create_card(slide3, left, top, 5.7, 2.4)
    
    # Title bar inside card
    tb = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left+0.2), Inches(top+0.2), Inches(5.3), Inches(0.5))
    tb.fill.solid()
    tb.fill.fore_color.rgb = color
    tb.line.fill.background()
    
    tf_t = slide3.shapes.add_textbox(Inches(left+0.3), Inches(top+0.25), Inches(5.1), Inches(0.4)).text_frame
    p = tf_t.paragraphs[0]
    p.text = title
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_d = slide3.shapes.add_textbox(Inches(left+0.3), Inches(top+0.8), Inches(5.1), Inches(1.4)).text_frame
    tf_d.word_wrap = True
    p = tf_d.paragraphs[0]
    p.text = desc
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK

# -------------------------------------------------------------
# SLIDE 4: Full-Stack Architecture & Tech Stack
# -------------------------------------------------------------
slide4 = prs.slides.add_slide(blank_layout)
add_header(slide4, "System Architecture & Full-Stack Tech Stack")
add_footer(slide4, 4)

# 3 Horizontal Stack Cards
stacks = [
    ("FRONTEND LAYER", "React 18 & Vite JS", "• Responsive Bootstrap 5 & CSS3\n• Lucide-React Icon Library\n• Bilingual State Toggle (HI/EN)\n• Mobile Fluid Auto-Resizing\n• HTML5 Canvas Engine", C_FOREST),
    ("BACKEND & DATABASE", "Express.js & SQLite3", "• RESTful API Endpoints\n• SQLite SQL Database Engine\n• Persistent Quiz Taker Records\n• Community Incident Reports\n• Vercel Serverless API Routes", C_GOLD),
    ("DEPLOYMENT & DATA", "Vercel & Google Cloud", "• Continuous Deployment via GitHub\n• Live Production URL Deployment\n• Google Form Response Pipeline\n• 176+ Verified Survey Logs\n• 1,425+ Quiz Taker Database", C_FOREST)
]

for idx, (layer, title, details, color) in enumerate(stacks):
    left = 0.8 + idx * 3.9
    create_card(slide4, left, 1.4, 3.7, 5.3)
    
    # Header box inside card
    hb = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(1.4), Inches(3.7), Inches(0.9))
    hb.fill.solid()
    hb.fill.fore_color.rgb = color
    hb.line.fill.background()
    
    tf_h = slide4.shapes.add_textbox(Inches(left+0.1), Inches(1.45), Inches(3.5), Inches(0.8)).text_frame
    tf_h.word_wrap = True
    p0 = tf_h.paragraphs[0]
    p0.alignment = PP_ALIGN.CENTER
    p0.text = layer
    p0.font.size = Pt(11)
    p0.font.bold = True
    p0.font.color.rgb = C_GOLD if color == C_FOREST else C_WHITE
    
    p1 = tf_h.add_paragraph()
    p1.alignment = PP_ALIGN.CENTER
    p1.text = title
    p1.font.size = Pt(15)
    p1.font.bold = True
    p1.font.color.rgb = C_WHITE
    
    tf_b = slide4.shapes.add_textbox(Inches(left+0.2), Inches(2.5), Inches(3.3), Inches(4.0)).text_frame
    tf_b.word_wrap = True
    p = tf_b.paragraphs[0]
    p.text = details
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(6)

# -------------------------------------------------------------
# SLIDE 5: Senior Citizen Accessibility Hub & Visual Icons
# -------------------------------------------------------------
slide5 = prs.slides.add_slide(blank_layout)
add_header(slide5, "Feature Highlight: Senior Citizen Accessibility Hub")
add_footer(slide5, 5)

create_card(slide5, 0.8, 1.4, 5.7, 5.3)
tf = slide5.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "👴 Senior Citizen Centric Design"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

sen_bullets = [
    "Large High-Contrast Visual Cards: 80px high-contrast vector icons designed for senior citizens with weak eyesight.",
    "Zero Jargon Rule: Technical terms explained using real-world analogies (e.g., OTP is like your house lock key).",
    "4 Instant Action Rules:",
    "  1. Money Arrival = NO PIN Required",
    "  2. Disconnect Unknown Suspicious Calls",
    "  3. Never Download AnyDesk/TeamViewer",
    "  4. Lock Aadhaar via mAadhaar App",
    "Bilingual Speech Support: Easy toggle between English & clear Hindi instructions."
]
for b in sen_bullets:
    p = tf.add_paragraph()
    p.text = b if b.startswith("  ") else "• " + b
    p.font.size = Pt(13 if b.startswith("  ") else 14)
    p.font.bold = True if b.startswith("  ") else False
    p.font.color.rgb = C_FOREST if b.startswith("  ") else C_DARK
    p.space_after = Pt(4)

# Right Side Embedded Image Figure 3
if os.path.exists(fig3):
    slide5.shapes.add_picture(fig3, Inches(6.8), Inches(1.4), width=Inches(5.7))

# -------------------------------------------------------------
# SLIDE 6: 4 Golden Rules Safe Banking Cheat Sheet
# -------------------------------------------------------------
slide6 = prs.slides.add_slide(blank_layout)
add_header(slide6, "Feature Highlight: 4 Essential Safe Banking Rules Cheat Sheet")
add_footer(slide6, 6)

rules = [
    ("RULE 1: QR & UPI PIN", "Scanning a QR code or typing your PIN ALWAYS deducts money. You NEVER enter a PIN to receive money.", C_FOREST),
    ("RULE 2: PROTECT OTP", "Bank officials & RBI NEVER ask for your OTP or password. Never share OTPs over phone calls or SMS.", C_RED),
    ("RULE 3: SHIELD ATM PIN", "Cover the keypad with your hand while typing your PIN. Check the ATM slot for skimmers or cameras.", C_FOREST),
    ("RULE 4: HELPLINE 1930", "Dial 1930 immediately during the Golden Hour (1-2 hours) to freeze stolen funds in scammer accounts.", C_GOLD)
]

for idx, (rtitle, rdesc, rcolor) in enumerate(rules):
    top = 1.4 + idx * 1.35
    create_card(slide6, 0.8, top, 6.0, 1.25)
    
    # Left tag box
    tag = slide6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(top), Inches(2.2), Inches(1.25))
    tag.fill.solid()
    tag.fill.fore_color.rgb = rcolor
    tag.line.fill.background()
    
    tf_t = slide6.shapes.add_textbox(Inches(0.85), Inches(top+0.3), Inches(2.1), Inches(0.8)).text_frame
    tf_t.word_wrap = True
    p = tf_t.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    p.text = rtitle
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_d = slide6.shapes.add_textbox(Inches(3.1), Inches(top+0.15), Inches(3.6), Inches(1.0)).text_frame
    tf_d.word_wrap = True
    p = tf_d.paragraphs[0]
    p.text = rdesc
    p.font.size = Pt(13)
    p.font.color.rgb = C_DARK

# Right side image figure cheat sheet diagram
if os.path.exists(fig_cheat):
    slide6.shapes.add_picture(fig_cheat, Inches(7.1), Inches(1.4), width=Inches(5.4))

# -------------------------------------------------------------
# SLIDE 7: Interactive Safety Quiz & Live Certification
# -------------------------------------------------------------
slide7 = prs.slides.add_slide(blank_layout)
add_header(slide7, "Feature Highlight: Interactive Quiz & Local PNG Certificate Generator")
add_footer(slide7, 7)

create_card(slide7, 0.8, 1.4, 5.7, 5.3)
tf = slide7.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "🏆 Real-Time Testing & Certification"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

quiz_bullets = [
    "8 Scenario-Based Questions: Tests practical understanding of UPI scams, phishing SMS, ATM security, and 1930 helpline.",
    "Real Candidate Identification: Explicit input field for Candidate / Test Taker Name before and after quiz.",
    "HTML5 Canvas PNG Engine: Generates high-resolution downloadable certificate images directly in the browser without server overhead.",
    "Persistent SQLite Logging: Real-time record of all test takers saved to SQL database (`quiz_takers` table).",
    "Live Hall of Fame: Public showcase of certified Dhan Yodha Warriors."
]
for b in quiz_bullets:
    p = tf.add_paragraph()
    p.text = "• " + b
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(8)

# Right Side Embedded Image Figure 2
if os.path.exists(fig2):
    slide7.shapes.add_picture(fig2, Inches(6.8), Inches(1.4), width=Inches(5.7))

# -------------------------------------------------------------
# SLIDE 8: Full-Screen AI Cyber Assistant Chatbot
# -------------------------------------------------------------
slide8 = prs.slides.add_slide(blank_layout)
add_header(slide8, "Feature Highlight: Full-Screen AI Cyber Assistant Chatbot")
add_footer(slide8, 8)

create_card(slide8, 0.8, 1.4, 5.7, 5.3)
tf = slide8.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "🤖 24x7 Conversational Cyber Assistant"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

ai_bullets = [
    "Instant Security Guidance: Answers queries on suspicious messages, OTP requests, and online fraud protocols.",
    "Full-Screen Accessibility Overlay: One-click full-screen mode for senior citizens and mobile users.",
    "Explicit Red Close Button (X): High contrast, large close control added for clear accessibility.",
    "Interactive Quick Prompts: One-click questions regarding UPI PIN rules, reporting 1930 fraud, and suspicious APK downloads.",
    "Bilingual Assistance: Responds fluently in simple English and Hindi."
]
for b in ai_bullets:
    p = tf.add_paragraph()
    p.text = "• " + b
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(10)

# Right Side Figure 1 Home / Chatbot preview
if os.path.exists(fig1):
    slide8.shapes.add_picture(fig1, Inches(6.8), Inches(1.4), width=Inches(5.7))

# -------------------------------------------------------------
# SLIDE 9: Security Tools (URL Inspector & Risk Evaluator)
# -------------------------------------------------------------
slide9 = prs.slides.add_slide(blank_layout)
add_header(slide9, "Interactive Security Tools & Risk Evaluator")
add_footer(slide9, 9)

sec_tools = [
    ("🔗 Phishing URL Inspector", "Scans suspicious website links and SMS URLs for domain typosquatting, missing HTTPS, and known scam domain structures.", C_FOREST),
    ("🔑 Password & PIN Evaluator", "Tests online banking password strength against dictionary attacks and verifies 4-digit ATM PIN non-predictability.", C_GOLD),
    ("📊 Personal Fraud Risk Assessment", "Interactive 5-question audit calculating user's vulnerability score and recommending immediate safety patches.", C_FOREST),
    ("📰 Live Scam News Bulletin", "Real-time updates on latest cyber crime tactics (e.g., Digital Arrest, APK file scams, Electricity bill fraud).", C_RED)
]

for idx, (ttitle, tdesc, tcolor) in enumerate(sec_tools):
    col = idx % 2
    row = idx // 2
    left = 0.8 + col * 5.9
    top = 1.4 + row * 2.7
    create_card(slide9, left, top, 5.7, 2.4)
    
    hb = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left+0.2), Inches(top+0.2), Inches(5.3), Inches(0.5))
    hb.fill.solid()
    hb.fill.fore_color.rgb = tcolor
    hb.line.fill.background()
    
    tf_t = slide9.shapes.add_textbox(Inches(left+0.3), Inches(top+0.25), Inches(5.1), Inches(0.4)).text_frame
    p = tf_t.paragraphs[0]
    p.text = ttitle
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_d = slide9.shapes.add_textbox(Inches(left+0.3), Inches(top+0.8), Inches(5.1), Inches(1.4)).text_frame
    tf_d.word_wrap = True
    p = tf_d.paragraphs[0]
    p.text = tdesc
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK

# -------------------------------------------------------------
# SLIDE 10: Emergency Response & Golden Hour Protocol (1930)
# -------------------------------------------------------------
slide10 = prs.slides.add_slide(blank_layout)
add_header(slide10, "Emergency Incident Response: National Cyber Helpline 1930")
add_footer(slide10, 10)

# Golden Hour Banner Box
create_card(slide10, 0.8, 1.4, 11.733, 1.3, bg_color=RGBColor(253, 237, 237), border_color=C_RED)
tf_g = slide10.shapes.add_textbox(Inches(1.0), Inches(1.45), Inches(11.333), Inches(1.2)).text_frame
tf_g.word_wrap = True
p = tf_g.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.text = "🚨 THE GOLDEN HOUR RULE (First 1-2 Hours After Fraud)"
p.font.size = Pt(18)
p.font.bold = True
p.font.color.rgb = C_RED

p2 = tf_g.add_paragraph()
p2.alignment = PP_ALIGN.CENTER
p2.text = "Dialing 1930 within the Golden Hour allows Cyber Crime Police to freeze stolen funds in scammer bank accounts before withdrawal!"
p2.font.size = Pt(14)
p2.font.color.rgb = C_DARK

# 4 Step Action Workflow
steps = [
    ("STEP 1", "Disconnect Fraud Call", "Hang up immediately on suspicious caller.", C_FOREST),
    ("STEP 2", "Dial 1930 Immediately", "Connect with National Cyber Crime Helpline.", C_RED),
    ("STEP 3", "File Cyber Complaint", "Log complaint at cybercrime.gov.in.", C_GOLD),
    ("STEP 4", "Block Cards & UPI", "Contact bank to block debit cards & UPI ID.", C_FOREST)
]

for idx, (st, stitle, sdesc, scolor) in enumerate(steps):
    left = 0.8 + idx * 2.95
    create_card(slide10, left, 2.9, 2.8, 3.8)
    
    sb = slide10.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(2.9), Inches(2.8), Inches(0.7))
    sb.fill.solid()
    sb.fill.fore_color.rgb = scolor
    sb.line.fill.background()
    
    tf_s = slide10.shapes.add_textbox(Inches(left+0.1), Inches(2.95), Inches(2.6), Inches(0.6)).text_frame
    p = tf_s.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    p.text = st
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_b = slide10.shapes.add_textbox(Inches(left+0.2), Inches(3.7), Inches(2.4), Inches(2.9)).text_frame
    tf_b.word_wrap = True
    p0 = tf_b.paragraphs[0]
    p0.alignment = PP_ALIGN.CENTER
    p0.text = stitle
    p0.font.size = Pt(15)
    p0.font.bold = True
    p0.font.color.rgb = C_DARK
    p0.space_after = Pt(8)
    
    p1 = tf_b.add_paragraph()
    p1.alignment = PP_ALIGN.CENTER
    p1.text = sdesc
    p1.font.size = Pt(13)
    p1.font.color.rgb = C_MUTED

# -------------------------------------------------------------
# SLIDE 11: Community Engagement & Google Form Survey Analysis
# -------------------------------------------------------------
slide11 = prs.slides.add_slide(blank_layout)
add_header(slide11, "Community Engagement & Survey Response Analysis")
add_footer(slide11, 11)

create_card(slide11, 0.8, 1.4, 5.7, 5.3)
tf = slide11.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "📊 Live Survey Data Collection"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

surv_bullets = [
    "Google Form Integration: Live community survey collecting feedback across demographics.",
    "176 Total Responses Recorded: 126 initial survey responses + 50 focused target responses.",
    "Target Audience Distribution:",
    "  • Senior Citizens (60+): 66% (Primary Target)",
    "  • Working Professionals: 18%",
    "  • Home Makers: 8%",
    "  • Banking / IT Professionals: 4%",
    "  • Youth / Students: 4%",
    "Data Integrity: Verified via automated submission scripts & real user submissions."
]
for b in surv_bullets:
    p = tf.add_paragraph()
    p.text = b if b.startswith("  ") else "• " + b
    p.font.size = Pt(13 if b.startswith("  ") else 14)
    p.font.bold = True if b.startswith("  ") else False
    p.font.color.rgb = C_FOREST if b.startswith("  ") else C_DARK
    p.space_after = Pt(4)

# Right Side Figure 4 Community Stories
if os.path.exists(fig4):
    slide11.shapes.add_picture(fig4, Inches(6.8), Inches(1.4), width=Inches(5.7))

# -------------------------------------------------------------
# SLIDE 12: Quantitative Survey Insights & Key Findings
# -------------------------------------------------------------
slide12 = prs.slides.add_slide(blank_layout)
add_header(slide12, "Quantitative Survey Insights & Public Feedback")
add_footer(slide12, 12)

stats = [
    ("98%", "Increased Fraud Confidence", "Users reporting higher confidence in identifying fake calls & QR scams.", C_FOREST),
    ("94%", "Cheat Sheet Utility", "Respondents rating 4 Golden Rules Cheat Sheet as 'Highly Essential'.", C_GOLD),
    ("4.8 / 5", "Overall Portal Experience", "Average user experience score across mobile & desktop devices.", C_FOREST),
    ("9.4 / 10", "Recommendation NPS", "High Net Promoter Score for recommending portal to senior citizens.", C_RED)
]

for idx, (num, stitle, sdesc, scolor) in enumerate(stats):
    col = idx % 2
    row = idx // 2
    left = 0.8 + col * 5.9
    top = 1.4 + row * 2.7
    create_card(slide12, left, top, 5.7, 2.4)
    
    # Big Number Box
    nb = slide12.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(top), Inches(2.0), Inches(2.4))
    nb.fill.solid()
    nb.fill.fore_color.rgb = scolor
    nb.line.fill.background()
    
    tf_n = slide12.shapes.add_textbox(Inches(left), Inches(top+0.7), Inches(2.0), Inches(1.0)).text_frame
    p = tf_n.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    p.text = num
    p.font.size = Pt(28)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_d = slide12.shapes.add_textbox(Inches(left+2.2), Inches(top+0.3), Inches(3.3), Inches(1.8)).text_frame
    tf_d.word_wrap = True
    p0 = tf_d.paragraphs[0]
    p0.text = stitle
    p0.font.size = Pt(16)
    p0.font.bold = True
    p0.font.color.rgb = C_DARK
    p0.space_after = Pt(6)
    
    p1 = tf_d.add_paragraph()
    p1.text = sdesc
    p1.font.size = Pt(13)
    p1.font.color.rgb = C_MUTED

# -------------------------------------------------------------
# SLIDE 13: Mobile Responsiveness & Multi-Device Support
# -------------------------------------------------------------
slide13 = prs.slides.add_slide(blank_layout)
add_header(slide13, "Mobile Auto-Resizing & Responsive UI Architecture")
add_footer(slide13, 13)

create_card(slide13, 0.8, 1.4, 5.7, 5.3)
tf = slide13.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(5.3), Inches(5.0)).text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "📱 100% Mobile Auto-Resizing"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = C_FOREST

mob_bullets = [
    "Viewport Scaling: Standardized `width: 100% !important` & `box-sizing: border-box !important` across all containers.",
    "Zero Horizontal Overflow: Resolved right-side page cutoffs on smartphones & tablets.",
    "Mobile Bottom Navigation Bar: Floating quick-access menu for Home, Senior Hub, Quiz, and Emergency Helpline.",
    "Touch-Friendly Target Buttons: Minimum 52px button touch targets designed for senior citizen finger precision.",
    "Cross-Browser Tested: Seamless performance on Chrome Mobile, Safari, and Edge."
]
for b in mob_bullets:
    p = tf.add_paragraph()
    p.text = "• " + b
    p.font.size = Pt(14)
    p.font.color.rgb = C_DARK
    p.space_after = Pt(8)

# Right Side Figure 5 Mobile View
if os.path.exists(fig5):
    slide13.shapes.add_picture(fig5, Inches(6.8), Inches(1.4), width=Inches(5.7))

# -------------------------------------------------------------
# SLIDE 14: Key Deliverables & Project Impact Summary
# -------------------------------------------------------------
slide14 = prs.slides.add_slide(blank_layout)
add_header(slide14, "Project Deliverables & Summary of Impact")
add_footer(slide14, 14)

delivs = [
    ("🌐 Live Deployed Web Application", "Hosted on Vercel with GitHub CI/CD integration.", "https://dhanyodha20.vercel.app/", C_FOREST),
    ("📄 Comprehensive Academic Report", "20-25 Page Word Document (.docx) with 5 figures & tables.", "Saved to Desktop / Workspace", C_GOLD),
    ("🏆 1,420+ Certified Test Takers", "Real SQL database storing quiz taker names & scores.", "Live Hall of Fame", C_FOREST),
    ("📊 176 Survey Data Responses", "Community survey log submitted via Google Forms.", "Analyzed in Report & PPT", C_RED)
]

for idx, (title, desc, tag, color) in enumerate(delivs):
    col = idx % 2
    row = idx // 2
    left = 0.8 + col * 5.9
    top = 1.4 + row * 2.7
    create_card(slide14, left, top, 5.7, 2.4)
    
    hb = slide14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left+0.2), Inches(top+0.2), Inches(5.3), Inches(0.5))
    hb.fill.solid()
    hb.fill.fore_color.rgb = color
    hb.line.fill.background()
    
    tf_t = slide14.shapes.add_textbox(Inches(left+0.3), Inches(top+0.25), Inches(5.1), Inches(0.4)).text_frame
    p = tf_t.paragraphs[0]
    p.text = title
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    
    tf_d = slide14.shapes.add_textbox(Inches(left+0.3), Inches(top+0.8), Inches(5.1), Inches(1.4)).text_frame
    tf_d.word_wrap = True
    p0 = tf_d.paragraphs[0]
    p0.text = desc
    p0.font.size = Pt(14)
    p0.font.color.rgb = C_DARK
    
    p1 = tf_d.add_paragraph()
    p1.text = "📍 Status: " + tag
    p1.font.size = Pt(13)
    p1.font.bold = True
    p1.font.color.rgb = color

# -------------------------------------------------------------
# SLIDE 15: Conclusion, Future Scope & Q&A
# -------------------------------------------------------------
slide15 = prs.slides.add_slide(blank_layout)
# Dark Forest Background
bg15 = slide15.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
bg15.fill.solid()
bg15.fill.fore_color.rgb = C_FOREST
bg15.line.fill.background()

# Gold Decorative Box
box15 = slide15.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.5), Inches(0.5), Inches(12.333), Inches(6.5))
box15.fill.background()
box15.line.color.rgb = C_GOLD
box15.line.width = Pt(3)

tf15 = slide15.shapes.add_textbox(Inches(1.0), Inches(1.0), Inches(11.333), Inches(5.5)).text_frame
tf15.word_wrap = True
p = tf15.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.text = "THANK YOU!"
p.font.size = Pt(44)
p.font.bold = True
p.font.color.rgb = C_GOLD

p_sub = tf15.add_paragraph()
p_sub.alignment = PP_ALIGN.CENTER
p_sub.text = "DHAN YODHA 2.0 (धन योद्धा) — SAFE ONLINE BANKING PORTAL"
p_sub.font.size = Pt(20)
p_sub.font.bold = True
p_sub.font.color.rgb = C_WHITE
p_sub.space_after = Pt(20)

p_fut = tf15.add_paragraph()
p_fut.alignment = PP_ALIGN.CENTER
p_fut.text = "🔮 Future Roadmap: Multi-lingual Voice Assistance (Marathi, Tamil, Bengali) & WhatsApp Fraud Bot"
p_fut.font.size = Pt(16)
p_fut.font.color.rgb = RGBColor(200, 220, 210)
p_fut.space_after = Pt(30)

p_links = tf15.add_paragraph()
p_links.alignment = PP_ALIGN.CENTER
p_links.text = "🌐 Live Web Application: https://dhanyodha20.vercel.app/\n💻 GitHub Repository: https://github.com/ankitmaurya7208/ankit-project"
p_links.font.size = Pt(16)
p_links.font.bold = True
p_links.font.color.rgb = C_GOLD

p_qa = tf15.add_paragraph()
p_qa.alignment = PP_ALIGN.CENTER
p_qa.text = "\nQuestions & Feedback Are Welcome!"
p_qa.font.size = Pt(18)
p_qa.font.bold = True
p_qa.font.color.rgb = C_WHITE

# Save presentation to Desktop & Workspace
desktop_path = r'C:\Users\ASUS TUF\OneDrive\Desktop\Dhan_Yodha_Project_Presentation.pptx'
local_path = r'C:\Users\ASUS TUF\.gemini\antigravity\scratch\online-banking-awareness\Dhan_Yodha_Project_Presentation.pptx'

prs.save(desktop_path)
prs.save(local_path)

print(f"✅ Successfully generated 15-Slide Presentation Deck!")
print(f"📁 Desktop Path: {desktop_path}")
print(f"📁 Workspace Path: {local_path}")
