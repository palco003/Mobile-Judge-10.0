// var store = Ext.create('Ext.data.Store', { //('MobileJudge.store.stats.ProjectGrades', {
//     storeId: 'projectGrades',
//     // alias: 'store.projectGrades',
//
//     // TODO: get average grade
//     groupField: 'project',
//     fields: ['grade', 'project'],
//
//     autoLoad: true,
//     data: []
//     // pageSize: 0
// });

// Ext.define('MobileJudge.store.stats.GroupedProjects', {
//     extend: 'Ext.data.Store',
//     alias: 'store.groupedProjects',
//     requires: [
//         'MobileJudge.model.stats.GroupedProjects'
//     ],
//
//     model: 'MobileJudge.model.stats.GroupedProjects',
//     listeners: {
//         load: function() {
//             // // instance of the original store
//             // Ext.define('MobileJudge.store.stats.GroupedProjects', {
//             //     extend: 'Ext.data.Store',
//             //     model: 'MobileJudge.model.stats.GroupedProjects'
//             // });
//
//             // store to contain the grouped data
//             var groupedStore = Ext.create('MobileJudge.store.stats.GroupedProjects');
//             console.log(groupedStore);
//             // iterate the groups and average the 'grade' value per project
//             store.getGroups().each(function(item) {
//                 console.log(item);
//                 groupedStore.add({
//                     project: item.getGroupKey(),
//                     grade: item.average('grade')
//                 });
//             });
//         }
//     }
// });

Ext.define('MobileJudge.store.stats.ProjectGrades', {
    extend: 'Ext.data.Store',
    alias: 'store.projectGrades',
    storeId: 'projectGrades',
    fields: ['studentid', 'termid', 'state', 'abbr', 'fullname',
        'email', 'project', 'grade', 'rawGrade', 'max', 'pending', 'accepted', 'rejected', 'filterStatus'],
    data: {
        items: [{
            "studentid": 1571224,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Sean Monroe",
            "email": "smonr003@fiu.edu",
            "project": "Agricultural Robotics 3.0",
            "grade": 47.50,
            "rawGrade": 47.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2106106,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Kathryn Bello",
            "email": "kbell005@fiu.edu",
            "project": "Streamlining Community Service Process at FIU 1.0",
            "grade": 45.00,
            "rawGrade": 45.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2114515,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Victor Inostroza",
            "email": "vinos001@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 48.67,
            "rawGrade": 48.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2276299,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Matthew Thomson",
            "email": "mthom031@fiu.edu",
            "project": "Traffic Simulator 2.0",
            "grade": 12.00,
            "rawGrade": 12.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 1,
            "filterStatus": "AR"
        }, {
            "studentid": 2278535,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Christian Silva",
            "email": "csilv069@fiu.edu",
            "project": "Agricultural Robotics 3.0",
            "grade": 43.33,
            "rawGrade": 43.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2598224,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Ekaterina Gumnova",
            "email": "egumn001@fiu.edu",
            "project": "Streamlining Community Service Process at FIU 1.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2643409,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jose Casanova",
            "email": "jcasa018@fiu.edu",
            "project": "Professional Program Management System 1.0",
            "grade": 31.33,
            "rawGrade": 31.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2652365,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Josue Mirtil",
            "email": "jmirt001@fiu.edu",
            "project": "Smart Billionaires 1.0",
            "grade": 32.00,
            "rawGrade": 32.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2802295,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Alfredo Santoyo",
            "email": "asant049@fiu.edu",
            "project": "Academic Success Initiative - ASI PantherCentric 1.0",
            "grade": 44.67,
            "rawGrade": 44.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2932902,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Daniel Rivero",
            "email": "drive076@fiu.edu",
            "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 2995113,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Rolando Moreno",
            "email": "rmore071@fiu.edu",
            "project": "Academic Success Initiative - ASI PantherCentric 1.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3119719,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Dafna Steinberg",
            "email": "dstei035@fiu.edu",
            "project": "VIP Website 6.0",
            "grade": 46.50,
            "rawGrade": 46.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3245010,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Stephane Charite",
            "email": "schar061@fiu.edu",
            "project": "BOLO 8.0",
            "grade": 48.00,
            "rawGrade": 48.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3280808,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Priscila Cordova",
            "email": "pcord004@fiu.edu",
            "project": "Academic Success Initiative - ASI PantherCentric 1.0",
            "grade": 39.00,
            "rawGrade": 39.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3282131,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Tiana Ruiz",
            "email": "truiz006@fiu.edu",
            "project": "Hemodynamic Imaging of Lower Extremity Ulcers 1.0",
            "grade": 44.20,
            "rawGrade": 44.20,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3319529,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Ernesto Scerpella",
            "email": "escer001@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 38.67,
            "rawGrade": 38.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3320295,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jose Ayala",
            "email": "jayal002@fiu.edu",
            "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
            "grade": 49.67,
            "rawGrade": 49.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3337819,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "David Schiumerini",
            "email": "dschi002@fiu.edu",
            "project": "SkillCourt 8.0",
            "grade": 45.00,
            "rawGrade": 45.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3353814,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Enrique Hidalgo",
            "email": "ehida016@fiu.edu",
            "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
            "grade": 45.00,
            "rawGrade": 45.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3383076,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Joseph Casal",
            "email": "jcasa050@fiu.edu",
            "project": "BreazeHome 2.0",
            "grade": 48.00,
            "rawGrade": 48.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3510364,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Steve Joseph",
            "email": "sjose039@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 33.00,
            "rawGrade": 33.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3669639,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Richard Rodriguez",
            "email": "rrodr420@fiu.edu",
            "project": "SkillCourt 8.0",
            "grade": 42.75,
            "rawGrade": 42.75,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3734451,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Ruben Valdes",
            "email": "rvald095@fiu.edu",
            "project": "Exploring the Unconscious 1.0",
            "grade": 43.67,
            "rawGrade": 43.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3748243,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Juan Molina",
            "email": "jmoli085@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 47.33,
            "rawGrade": 47.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3763339,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Carlos Manrique",
            "email": "cmanr010@fiu.edu",
            "project": "BreazeHome 2.0",
            "grade": 42.00,
            "rawGrade": 42.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3765331,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Ranses Melo",
            "email": "rmelo006@fiu.edu",
            "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
            "grade": 41.00,
            "rawGrade": 41.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3774990,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Oscar Yannelli",
            "email": "oyann001@fiu.edu",
            "project": "Virtual Roll Call 2.0",
            "grade": 38.25,
            "rawGrade": 38.25,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 1,
            "filterStatus": "AR"
        }, {
            "studentid": 3805724,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Omar Kadery",
            "email": "okade001@fiu.edu",
            "project": "BOLO 8.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3885008,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Bernardo Pla",
            "email": "bpla003@fiu.edu",
            "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
            "grade": 47.00,
            "rawGrade": 47.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3915224,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Rolando Carralero",
            "email": "rcarr085@fiu.edu",
            "project": "Traffic Simulator 2.0",
            "grade": 47.00,
            "rawGrade": 47.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3960176,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Mark Barrett",
            "email": "mbarr194@fiu.edu",
            "project": "BreazeHome 2.0",
            "grade": 48.67,
            "rawGrade": 48.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3966932,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Alberto Castillo",
            "email": "acast329@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 25.67,
            "rawGrade": 25.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3981050,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Nickolas Morales",
            "email": "nmora041@fiu.edu",
            "project": "FLACADA 1.0",
            "grade": 42.00,
            "rawGrade": 42.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 3986738,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Joana Fraga",
            "email": "jfrag019@fiu.edu",
            "project": "Professional Program Management System 1.0",
            "grade": 38.00,
            "rawGrade": 38.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4000283,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Elliot Nicholson",
            "email": "enich011@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 48.50,
            "rawGrade": 48.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4008937,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Richard Quintero",
            "email": "rquin072@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 45.50,
            "rawGrade": 45.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4129026,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Rodrigo Aguilar",
            "email": "ragui054@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 42.67,
            "rawGrade": 42.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4140124,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Deon Davis",
            "email": "ddavi133@fiu.edu",
            "project": "Learning with Augmented Reality 3.0",
            "grade": 44.33,
            "rawGrade": 44.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4141750,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Beth Thompson",
            "email": "bthom088@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 46.50,
            "rawGrade": 46.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4174094,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Ricardo Gomez",
            "email": "rgome118@fiu.edu",
            "project": "BOLO 8.0",
            "grade": 45.00,
            "rawGrade": 45.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4235519,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Mabel Amaya",
            "email": "mamay005@fiu.edu",
            "project": "FLACADA 1.0",
            "grade": 0.00,
            "rawGrade": 0.00,
            "max": 0,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4238526,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Edvin Li",
            "email": "eli005@fiu.edu",
            "project": "Learning with Augmented Reality 3.0",
            "grade": 41.75,
            "rawGrade": 41.75,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4636102,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Fernando Mojena",
            "email": "fmoje001@fiu.edu",
            "project": "Life Management Platform 1.0",
            "grade": 41.50,
            "rawGrade": 41.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4749811,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Daniel Antonio",
            "email": "danto015@fiu.edu",
            "project": "Exploring the Unconscious 1.0",
            "grade": 46.00,
            "rawGrade": 46.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4805066,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Nicolas Howard",
            "email": "nhowa006@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 42.00,
            "rawGrade": 42.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4808229,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Daniel Khawand",
            "email": "dkhaw001@fiu.edu",
            "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
            "grade": 46.33,
            "rawGrade": 46.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 4953998,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jose Lezcano",
            "email": "jlezc007@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 44.50,
            "rawGrade": 44.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5057208,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Eric Fernandez",
            "email": "efern187@fiu.edu",
            "project": "Virtual Roll Call 2.0",
            "grade": 48.33,
            "rawGrade": 48.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5160375,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Mario Fidalgo",
            "email": "mfida003@fiu.edu",
            "project": "Mobile Judge 9.0",
            "grade": 45.50,
            "rawGrade": 45.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5310066,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Claudia Gourdet",
            "email": "cgour002@fiu.edu",
            "project": "Apps Arts and Issues: APP-lying the Arts to Digital Communication 1.0",
            "grade": 40.50,
            "rawGrade": 40.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5455785,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jose Ponce",
            "email": "jponc021@fiu.edu",
            "project": "VIP Website 6.0",
            "grade": 44.67,
            "rawGrade": 44.67,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5456823,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Fernando Acosta",
            "email": "facos012@fiu.edu",
            "project": "BreazeHome 2.0",
            "grade": 42.00,
            "rawGrade": 42.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5488829,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Rabaul Islam",
            "email": "risla001@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 45.00,
            "rawGrade": 45.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5576559,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Alejandro Corredor",
            "email": "acorr092@fiu.edu",
            "project": "BOLO 8.0",
            "grade": 43.75,
            "rawGrade": 43.75,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5647522,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Beatriz Hernandez",
            "email": "bhern104@fiu.edu",
            "project": "Life Management Platform 1.0",
            "grade": 43.75,
            "rawGrade": 43.75,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5699044,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Pachev Joseph",
            "email": "pjose031@fiu.edu",
            "project": "WEB-VR: Towards Virtual and Augmented Reality for the WEB 1.0",
            "grade": 46.00,
            "rawGrade": 46.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5731790,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Kyle Ryan",
            "email": "kryan014@fiu.edu",
            "project": "Mobile Judge 9.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5820326,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jake Lopez",
            "email": "jlope590@fiu.edu",
            "project": "Academic Success Initiative - ASI PantherCentric 1.0",
            "grade": 44.00,
            "rawGrade": 44.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5820788,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Joshua Parisaca",
            "email": "jpari021@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 41.33,
            "rawGrade": 41.33,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5924184,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Hamza Sohail",
            "email": "hsoha003@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 50.00,
            "rawGrade": 50.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5927293,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Max Mills",
            "email": "mmill209@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 40.00,
            "rawGrade": 40.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 5962595,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Jan Boscan",
            "email": "jbosc012@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 42.00,
            "rawGrade": 42.00,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }, {
            "studentid": 6046126,
            "termid": 15,
            "state": "Active",
            "abbr": "AC",
            "fullname": "Michael Santos",
            "email": "msant296@fiu.edu",
            "project": "IT Hands-on Non-profit Associations Reconstructions 1.0",
            "grade": 48.50,
            "rawGrade": 48.50,
            "max": 50,
            "pending": 0,
            "accepted": 1,
            "rejected": 0,
            "filterStatus": "A"
        }]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});


Ext.define('MobileJudge.model.stats.GradeAverage', {
    extend: 'Ext.data.Model',
    fields: ['project', 'fullname', 'average']
});

Ext.define('MobileJudge.store.stats.GradeAverage', {
    extend: 'Ext.data.Store',
    alias: 'store.gradeAverage',
    model: 'MobileJudge.model.stats.GradeAverage',
    data: (function () {
        var data = [];
        var expense = Ext.createByAlias('store.students');
        console.log('store before group ' + expense);
        expense.group('project');
        var groups = expense.getGroups();
        // for(var i = 0; i < groups.getCount(); i++){
        //
        // }
        // console.log(groups);
        groups.each(function (group) {
            console.log(group.config.groupKey);
            console.log(group);
            data.push({
                project: group.config.groupKey, // each group is a project
                average: group.average('grade')
            });
        });
        return data;
    })()
});

