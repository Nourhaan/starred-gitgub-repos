# starred-gitgub-repos 

The Project has one page which shows the starred Git repositories and its details 


#Features: 

As a User I should be able to list the most starred Github repos that were created in the last 30 days.
As a User I should see the results as a list. One repository per row.
As a User I should be able to see for each repo/row the following details :
Repository name
Repository description
Number of stars for the repo.
Number of issues for the repo.
Username and avatar of the owner.
As a User I should be able to keep scrolling and new results should appear (pagination). 


#Technical Information:

The used Technology is Angular
Pagination is server side pagination - send page number in API url 
The interval time is calculated using a Helper function in helper service and it is added to each repository item in the map function inside API Service file


#to run the Project Locally:

1. install NodeJS and Angular
2. run npm Install in Project Terminal to install required packages
3. after installation - run ng serve - to run development server
4. open http://localhost:4200 in browser


#Deployment Steps
1. run the command --> ng build --prod --aot --base-href /starred-git-repos/
2. the deployment result files will be generated in dist folder which will be copied to your server the base href after server link is starred-git-repos example: https://your-server-link/starred-git-repos


for more information about Angular Environment and Deployment in read me file inside project folder
