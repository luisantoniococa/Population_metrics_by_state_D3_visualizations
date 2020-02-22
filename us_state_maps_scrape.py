import pandas as pd
from splinter import Browser
from bs4 import BeautifulSoup as bs
import time

def scrape_info():

    states_csv = pd.read_csv("../Population_metrics_by_state_D3_visualizations/assets/data/data.csv")

    states_values = states_csv["state"]
    

    url = 'https://geology.com/world/the-united-states-of-america-satellite-image.shtml'
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless=False)

    browser.visit(url)
    
    images_urls = []
    # len(states_values)
    for x in states_values:
        one_state = browser.links.find_by_href(f'https://geology.com/county-map/{x.lower()}.shtml').click()
        html = browser.html
        soup = bs(html,'html.parser')
        image = soup.find('img')['src']
        images_urls.append({"state":x, "image":image})
        print()
        time.sleep(5)
        browser.back()
    browser.quit()
    