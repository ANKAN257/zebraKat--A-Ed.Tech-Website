const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const introHomeSchema = new Schema({
    welcomeText:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

});


const aboutSchema = new Schema({
    aboutImageUrl:{
        type:String,
        required:true,
    },
    aboutTitle:{
        type:String,
        required:true
    },
    aboutDescription:{
        type:String,
        required:true,
    },
    aboutTodo:{
        type:String,
        required:true,
    },
    aboutListTodos: [{
        todo: {
            type: String,
            required: true
        }
    }]



},{timestamps:true});

const projectSchema = new Schema({
    
    projectTitle:{
        type:String,
        required:true,
    },
    projectLink:{
        type:String,
        required:true,
    },
    projectImageOne:{
        type:String,
        required:true,
    },
    projectImageSecond:{
        type:String,
        required:true,
    },
    projectDescription:{
           type:String,
           required:true,
    },
    projectDetailsList:[{
           projectDList:{
            type:String,
            required:true,
           },
        
        }],
    projectTechUsedImage:[{
        techImageUsed:{
            type:String,
            required:true,
        }
    }],


});


const mySkillSchema=new Schema({
    
    mySkilltitle:{
        type:String,
        required:true,
    },
    mySkillImage:{
        type:String,
        required:true,
    }

})


const myExperienceSchema=new Schema({
    myExperienceTitle:{
        type:String,
        required:true,
    },
    myExperiencePeriod:{
        type:String,
        required:true,
    },
    myExperienceCompany:{
        type:String,
        required:true,
    },
    myExperienceDescription:{
        type:String,
        required:true,
    },
    

});
const myHeaderSchema=new Schema({
    myHeaderTitle:{
        type:String,
        required:true,
    },
    myHeaderLink:{
        type:String,
        required:true,
    }
});

const dsaProblemSchema = new Schema({
    topicTitle:{
        type:String,
        required:true,
    },
    
        problemName: {
            type: String,
            required: true
        },
        questionLinkFirst: {
            type: String,
            required: true
        },
        articleLink: {
            type: String,
            required: true
        },
        youtubeLink: {
            type: String,
            required: true
        },
        questionLinkSecond: {
            type: String,
            required: true
        },
   



},{timestamps:true});

const blogDataSchema=new Schema({
    blogCategory:{
        type:String,
        required:true

    },
   
        blogImageUrl:{
            type:String,
            required:true
        },
        blogTitleName:{
            type:String,
            required:true
        },
        blogDescription:{
            type:String,
            required:true
        },
        read_more_route:{
            type:String,
            required:true
        },
        Contributer_Name:{
            type:String,
            required:true
        },
        posted_Date:{
            type:String,
            required:true
        },
        blogContent:{
            type:String,
            required:true
        }
   

},{timestamps:true});




module.exports={
    IntroHome:mongoose.model("intros",introHomeSchema),
    About:mongoose.model("about",aboutSchema),
    Projects :mongoose.model("projects",projectSchema),
    MySkills:mongoose.model("myskills",mySkillSchema),
    MyExperiences:mongoose.model("myexperiences",myExperienceSchema),
    MyHeaders:mongoose.model("myheaders",myHeaderSchema),
    MyDsaProblems:mongoose.model("mydsaproblems",dsaProblemSchema),
    MyblogDatas:mongoose.model("myblogdatas",blogDataSchema)
   
}
