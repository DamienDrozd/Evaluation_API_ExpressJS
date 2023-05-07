import requests
import json
import random
from faker import Faker
faker = Faker()


def fetch_jobs():
    res = requests.get('http://localhost:3030/api/job')
    jobs = res.json()
    return jobs


def fetch_skills():
    res = requests.get('http://localhost:3030/api/skill')
    skills = res.json()
    return skills


def create_random_user():
    jobs = fetch_jobs()
    skills = fetch_skills()
    user_jobs = []
    user_skills = []

    for i in range(0, 5):
        job = jobs.pop(random.randint(0, len(jobs) - 1))
        user_jobs.append(job)
        skill = skills.pop(random.randint(0, len(skills) - 1))
        user_skills.append(skill)
    # print("userJobs", user_jobs)
    # print("userSkills", user_skills)
    return {
        "firstName": faker.first_name(),
        "lastName": faker.last_name(),
        "email": faker.email(),
        "password": faker.password(),
        "address": faker.address(),
        "city": faker.city(),
        "postcode": faker.numerify(text='%%%%%'),
        "phone": faker.phone_number(),
        "isAdmin": False,
        "price": random.randint(1, 1000),
        "experience_years": random.randint(1, 50),
        "skills": user_skills,
        "jobs": user_jobs,
        "company": None,
        "isFake": True
    }


def send_request():
    print("sendRequest")
    random_user = create_random_user()
    print("random_user", random_user)
    # print("skills", random_user["jobs"])

    link = 'http://localhost:3030/api/auth/register/freelance'
    res = requests.post(link, json=random_user)
    print("res", res.json())


for i in range(0, 30):
    send_request()
