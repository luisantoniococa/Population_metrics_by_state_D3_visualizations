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

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.

- - -

### Bonus: Impress the Boss (Optional Assignment)

Why make a static graphic when D3 lets you interact with your data?


#### 1. More Data, More Dynamics

You're going to include more demographics and more risk factors. Place additional labels in your scatter plot and give them click events so that your users can decide which data to display. Animate the transitions for your circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

* Hint: Try binding all of the CSV data to your circles. This will let you easily determine their x or y values when you click the labels.

#### 2. Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged)—we've already included this plugin in your assignment directory.

![8-tooltip](Images/8-tooltip.gif)

* Check out [David Gotz's example](https://bl.ocks.org/davegotz/bd54b56723c154d25eedde6504d30ad7) to see how you should implement tooltips with d3-tip.

- - -


