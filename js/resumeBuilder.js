/**
 * Created by akarthik1989 on 8/6/2016.
 */
// General facts:
var bio = {
    "name": "Alluru Karthik",
    "role": "Java Developer",
    "welcomeMessage": "Welcome to my webpage!",
    "contacts": {
        "mobile": "7164806645",
        "email": "allurukarthik01@gmail.com",
        "github": "https://github.com/allurukarthik",
        "linkedin": "https://www.linkedin.com/in/karthik-alluru-88152418",
        "location": "fremont, CA"
    },
    "biopic": "images/me.jpg",
    "skills": ["Languages: HTML,CSS,JAVASCRIPT"],
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLinkedIn = HTMLtwitter.replace("%data%", bio.contacts.linkedin);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile+formattedEmail + formattedGitHub + formattedLinkedIn + formattedLocation);
        $("#footerContacts").append(formattedMobile+formattedEmail + formattedGitHub + formattedLinkedIn + formattedLocation);
        $("#header").append(formattedPic);
        $("#header").append(formattedWelcome);

        $("#header").append(HTMLskillsStart);

        for (var e=0;e<bio.skills.length;e++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
            $("#skills").append(formattedSkill);
        };
    }
};

// Work-related information:
var work = {
    "jobs": [
        {
            "employer": "Amazon Development Centre ",
            "title": "Product Quality Specialist ",
            "location": "Hyderabad, India  ",
            "dates": "May 2012 - May 2014",
            "description": "Analyzed transactions on Amazon.com to identify fraudulent ones and helped in ensuring Amazon is the most trusted and safest place to transact online."
        }
    ],
    display: function() {
        for (var j =0;j< work.jobs.length;j++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[j].description);

            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescr);
        }
    }
};

// Information about completed projects:
var project = {
    "projects": [
        {
            "title": "Movie Site (HTML, CSS)",
            "dates": "Jan 2016 - Feb 2016",
            "description": " Developed front end for the movie site. .",
            "images": ["images/gabbar.png"]
        }
    ],
    display: function() {
        for (var p =0;p<project.projects.length;p++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
            var formattedProjectDescr = HTMLprojectDescription.replace("%data%", project.projects[p].description);

            var formattedProjectImage = "";

            for (var i=0;i<project.projects[p].images.length;i++) {
                formattedProjectImage += HTMLprojectImage.replace("%data%", project.projects[p].images[i]);
            }


            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescr);
            $(".project-entry:last").append(formattedProjectImage);



        }
        }

};

// Information about education and completed online courses:
var education = {
    "schools": [
        {
            "name": "Northwestern Polytechnic University",
            "location": "fremont, CA",
            "degree": "Masters",
            "majors": ["Computer Science"],
            "dates": " Aug 2014 - Dec 2015",
            "url": "http://www.npu.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Development",
            "school": "Udacity",
            "url": "https://www.udacity.com/nanodegree",
            "dates": "June 2016 - Ongoing"
        },

    ],
    display: function() {
        for (var s=0;s < education.schools.length;s++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
            var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[s].url);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolURL);
        }
        $("#education").append(HTMLonlineClasses);

        for (var c =0;c < education.onlineCourses.length;c++) {
            $("#education").append(HTMLschoolStart);

            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
            var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
            var formattedCourseDates= HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
            var formattedCourseURL= HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);

            $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);
            $(".education-entry:last").append(formattedCourseDates+formattedCourseURL);

            //$(".education-entry:last").append(formattedCourseSchool);


        }
    }
    }



// Displaying all the information:
bio.display();
work.display();
project.display();
education.display();


$("#mapDiv").append(googleMap);