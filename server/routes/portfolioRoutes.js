const router=require('express').Router()


const {IntroHome,About,Projects,MySkills,MyExperiences,MyHeaders,MyDsaProblems,MyblogDatas}=require('../models/portfolioModel')


//get all portfolio data
router.get("/get-portfolio-data",async (req, res)=>{
    try {
        const intros=await IntroHome.find();
        const abouts=await About.find();
        const projects=await Projects.find();
        const myskills=await MySkills.find();  
        const myexperiences=await MyExperiences.find();
        const myheaders=await MyHeaders.find();
        const mydsaproblems=await MyDsaProblems.find();
        const myblogdatas=await MyblogDatas.find();
          

        res.status(200).send({
            intros: intros,
            abouts:abouts,
            projects: projects,
            myskills: myskills,
            myexperiences: myexperiences,
            myheaders: myheaders,
            mydsaproblems:mydsaproblems,
            myblogdatas:myblogdatas,

        })


        
    } catch (error) {
         res.status(500).send(error)
    }
})



router.post("/update-intro",async(req,res) => {

    

    try {
        const intro=await IntroHome.findOneAndUpdate(
            {
                _id: req.body._id
            },
        
            req.body,
            {
                new: true,
            }
        )
        


        res.status(200).send({
            data:intro,
            success: true,
            message:"Intro updated successfully"
        })
    } catch (error) {
         res.status(500).send(error+"hi error ")        
    }
})



//About  routes
router.post("/post-about-data",async(req,res) => {
    

    try {
        
      const {aboutImageUrl,aboutTitle,aboutDescription,aboutTodo,aboutListTodos}=req.body
     

        let newAboutList = await About.findOne({ aboutTitle });
        if (!newAboutList) {
            newAboutList = new About({aboutImageUrl,aboutTitle,aboutDescription,aboutTodo,aboutListTodos})
        } else{
            return res.status(201).send({
                success:true,
                message:'About Card Already Created !',
                newAboutList,

            })
        }
            await newAboutList.save()
          

            return res.status(200).send({
                success:true,
                message:'About Card Created !',
                newAboutList,

            })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/update-about-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body);
           const aboutData=await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
        //    console.log("Update data:", aboutData); 
           res.status(200).send({
            data:aboutData,
            success:true,
            message:'About Data Updated successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/delete-about-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body); // Log request body
           const aboutData=await About.findOneAndDelete(
            { _id: req.body._id }
           );
        //    console.log("Deleted data:", aboutData); // Log deleted data
           res.status(200).send({
            data:aboutData,
            success:true,
            message:'About Data Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})



//project routes
router.post("/post-project-data",async(req,res) => {
    

    try {
        
      const {projectTitle,projectLink,projectImageOne,projectImageSecond,projectDescription,projectDetailsList,projectTechUsedImage}=req.body
     

      let newProjectList =await Projects.findOne({ projectTitle });
        if(!newProjectList){
            newProjectList=new Projects({projectTitle,projectLink,projectImageOne,projectImageSecond,projectDescription,projectDetailsList,projectTechUsedImage})
        } else{
            return res.status(201).send({
                success:true,
                message:'About Card Already Created !',
                newProjectList,

            })
        }     
        
        await newProjectList.save()
            return res.status(200).send({
                success:true,
                message:'project Details Created !',
                newProjectList,

            })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/update-project-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body);
           const projectData=await Projects.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
        //    console.log("Update data:", projectData); 
           res.status(200).send({
            data:projectData,
            success:true,
            message:'project Data Updated successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/delete-project-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body); // Log request body
           const projectData=await Projects.findOneAndDelete(
            { _id: req.body._id }
           );
        //    console.log("Deleted data:", aboutData); // Log deleted data
           res.status(200).send({
            data:projectData,
            success:true,
            message:'project Data Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})




//skills routes
router.post("/post-skills-data",async(req,res) => {
    

    try {
        
      const {mySkillImage,mySkilltitle}=req.body
     

      let newSkillData =await MySkills.findOne({ mySkilltitle });

      if(!newSkillData){
        newSkillData=new MySkills({mySkillImage,mySkilltitle})
      } else{
          return res.status(201).send({
              success:true,
              message:'skills Card Already Created !',
              newSkillData,

          })
      }     
      
            await newSkillData.save()
            return res.status(200).send({
                success:true,
                message:'skills added !',
                newSkillData,

            })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/update-skills-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body);
           const skillsData=await MySkills.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
        //    console.log("Update data:", projectData); 
           res.status(200).send({
            data:skillsData,
            success:true,
            message:'skills Data Updated successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/delete-skills-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body); // Log request body
           const skillsData=await MySkills.findOneAndDelete(
            { _id: req.body._id }
           );
        //    console.log("Deleted data:", skillsData); // Log deleted data
           res.status(200).send({
            data:skillsData,
            success:true,
            message:'skills Data Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})




//experience routes 
router.post("/post-experience-data",async(req,res) => {
    

    try {
        
      const {   myExperienceTitle,myExperiencePeriod,myExperienceCompany,myExperienceDescription}=req.body
     

        let newExperienceData=await MyExperiences.findOne({ myExperiencePeriod });
        if(!newExperienceData){
            newExperienceData=new MyExperiences({myExperienceTitle,myExperiencePeriod,myExperienceCompany,myExperienceDescription})
        }else{
            return res.status(201).send({
                success:true,
                message:'About Card Already Created !',
                newExperienceData,

            })
        }

            await newExperienceData.save()
            return res.status(200).send({
                success:true,
                message:'Experience added !',
                newExperienceData,

            })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/update-experience-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body);
           const newExperienceData=await MyExperiences.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
        //    console.log("Update data:", newExperienceData); 
           res.status(200).send({
            data:newExperienceData,
            success:true,
            message:'skills Data Updated successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})
router.post("/delete-experience-data",async(req,res) => {
    try {
        // console.log("Request body:", req.body); // Log request body
           const newExperienceData=await MyExperiences.findOneAndDelete(
            { _id: req.body._id }
           );
        //    console.log("Deleted data:", MyExperiences); // Log deleted data
           res.status(200).send({
            data:newExperienceData,
            success:true,
            message:'skills Data Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})



//dsa routes
router.post("/post-dsa-data", async (req, res) => {
    try {
        const { topicTitle, problemName, questionLinkFirst, articleLink, youtubeLink, questionLinkSecond } = req.body;
        console.log(req.body);

        let dsaProblem = await MyDsaProblems.findOne({ problemName, topicTitle });


        if (!dsaProblem) {
            // If the DSA problem doesn't exist, create a new one
            dsaProblem = new MyDsaProblems({ topicTitle, problemName, questionLinkFirst, articleLink, youtubeLink, questionLinkSecond });
        } else {
            // If the DSA problem already exists, send a success response with the existing data
            return res.status(201).send({
                success: false,
                message: 'DSA Problem Already Created!',
                dsaProblem,
            });
        }

        await dsaProblem.save();

        return res.status(200).send({
            success: true,
            message: 'DSA coding Problem successfully created!',
            dsaProblem,
        });
    } catch (error) {
        console.error(error);
        res.status(400).send("Error: " + error);
    }
});

router.post("/update-dsa-data", async (req, res) => {
    try {
       
          console.log("Request body:", req.body);
          const dsaProblem=await MyDsaProblems.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
           console.log("Update data:", dsaProblem); 
     
        // Document updated successfully
        res.status(200).send({
            success: true,
            message: 'DSA problem updated successfully',
            dsaProblem
        });
    } catch (error) {
        // Handle any errors that occur during the update operation
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/delete-dsa-data",async(req,res) => {
    try {
        console.log("Request body:", req.body); // Log request body
           const dsaProblem=await MyDsaProblems.findOneAndDelete(
            { _id: req.body._id }
           );
           console.log("Deleted data:", dsaProblem); // Log deleted data
           res.status(200).send({
            data:dsaProblem,
            success:true,
            message:'dsaProblem  Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})








router.post("/post-blog-data",async(req,res) => {
    

    try {
        
      const {blogCategory,blogImageUrl,blogTitleName,blogDescription,read_more_route,Contributer_Name,posted_Date,blogContent}=req.body
        console.log("request body: ",req.body);

        let blogData =await MyblogDatas.findOne({ blogCategory,blogTitleName });

      if(!blogData){
           blogData=new MyblogDatas( {blogCategory,blogImageUrl,blogTitleName,blogDescription,read_more_route,Contributer_Name,posted_Date,blogContent})
      } else{
          return res.status(201).send({
              success:true,
              message:'blogData Already Created !',
              blogData,

          })
      }     
     console.log("blogData : ",blogData);
           
           await blogData.save();
            return res.status(200).send({
                success:true,
                message:'blogData has been  created succesfully !',
                blogData,
            })

    } catch (error) {
         res.status(400).send(error+" hi error ")        
    }
})


router.post("/update-blog-data", async (req, res) => {
    try {
       
          console.log("Request body:", req.body);
          const blogData=await MyblogDatas.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new :true}
           );
           console.log("Update data:", blogData); 
     
        // Document updated successfully
        res.status(200).send({
            success: true,
            message: 'DSA problem updated successfully',
            blogData
        });
    } catch (error) {
        // Handle any errors that occur during the update operation
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/delete-blog-data",async(req,res) => {
    try {
        console.log("Request body:", req.body); // Log request body
           const blogData=await MyblogDatas.findOneAndDelete(
            { _id: req.body._id }
           );
           console.log("Deleted data:", blogData); // Log deleted data
           res.status(200).send({
            data:blogData,
            success:true,
            message:'blogData  Deleted successfully'
           })

    } catch (error) {
         res.status(400).send(error+"hi error ")        
    }
})







module.exports = router





