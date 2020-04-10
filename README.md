# Population_metrics_by_state_D3_visualizations

## Overview

This project is an interactive dynamic D3 Visualization that compares data between multiple factors (Age, Poverty Level, Health Care and Household Income) by states. The project also includes a web scraper that collects png maps of the the 50 states. It utilized HTML, CSS, JavaScript, D3 and JSON. The web scraper uses python, Beautiful Soup, pandas and splinter 

## Background

The goal is to analyze the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help understand data findings in health risks facing particular demographics. The project goes through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the project is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml) The current data set incldes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

### States maps Web Scraper
The png files are scraped from the following geographical website:

https://geology.com/world/the-united-states-of-america-satellite-image.shtml

It uses beautiful soup and splinter to retrieve the png data and stores it in a dictionary and transform it into a JSON file. 
The JSON keys has the following structure:
+ `image`: it contains the url link to the gif/png file.
+ `state`: it contains the label of the state scraped.
+ `status` : it represets the scrape status, if succesful the scrape was executed properly and failed it will be later set as a flag to retry the scrape later. 
![scraped results](https://github.com/luisantoniococa/Population_metrics_by_state_D3_visualizations/blob/master/scraper_results.png)
 
### D3 Interactive Scatterplots

The visualization is a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`. 

There are 9 possible visualizations interactions:
+ Poverty % vs Obesity %
+ Poverty % vs Smokers %
+ Poverty % vs Lack of Healthcare %
+ Median Age vs Obesity %
+ Median Age vs Smoker %
+ Median Age vs Lack of Healthcare %
+ Median Household Income vs Obesity %
+ Median Household Income vs Smoker %
+ Median Household Income vs Lack of Healthcare %

![Alt Text](https://github.com/luisantoniococa/Population_metrics_by_state_D3_visualizations/blob/master/screen-capture.gif)

In addition to the scatter plots the following details have been added to make the scatterplot dynamic and interactive:

* Abbreviation of the States in each data point.

* Dynamic animated axis that adjust with the data selected.

+ Dynamic animated labels that shows details of the selected axis (data) when hover. In addition to a picture of the state from the scraped dataset.
 + i.e. if the selected axis are obesity and Age, the tooltip will show the values for those axis for the hovered datapoint.  


- - -
#### Conclusion
The visualization is able provide valuable insights due to its interactivility. It also helps with providing more information in less space. 

- - -


