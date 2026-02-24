import smtplib
import random
from email.message import EmailMessage

otp = random.randint(0000, 9999)

# Create email
msg = EmailMessage()
msg["Subject"] = "Your One-Time Password (OTP) - Valid for 5 Minutes"
msg["From"] = "monirul.01401411046@gmail.com"
msg["To"] = "0323653982@student.wub.edu.bd"
msg.set_content(f"""
    Your One-Time Password (OTP) is: {otp}

    This OTP is valid for 5 minutes. Please do not share this code with anyone.
    If you did not request this code, you can safely ignore this email.

    Thank you,
    Hafiza's Art & Decor

""")

# Gmail SMTP settings
smtp_server = "smtp.gmail.com"
port = 587

# Login & send
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()
    server.login("monirul.01401411046@gmail.com", "zeqf ecvj owil xshv")
    server.send_message(msg)

print("Email sent successfully!")
