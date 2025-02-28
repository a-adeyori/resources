import React from 'react'
import Details from './Details'
import image1 from './assets/1.png'
import image2 from './assets/2.jpeg'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import image5 from './assets/5.png'
import image6 from './assets/6.jpeg'
import image7 from './assets/7.jpeg'
import image8 from './assets/8.jpeg'
import image9 from './assets/9.png'
import image10 from './assets/10.jpeg'
import image11 from './assets/11.jpeg'
import image12 from './assets/12.jpeg'

function Shop() {
  return (
    <>
        <div className='container'>
            <div className='item'>
                <div className='image-box'>
                <img className='image' src={image1}/>
                </div>
                
                <div className='content'>
                    <Details name='Leetcode Assistant' link= 'https://github.com/zubyj/leetcode-explained'/>
                </div>
            </div>
       

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image2}/>
            </div>
            <div className='content'>
                <Details name='Github Profile Designer' link= 'https://gprm.itsvg.in/'/>
            </div>
        </div>
        

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image3}/>
            </div>
            <div className='content'>
                <Details name='Data Structures Resource Beginner' link= 'https://colorstack-assets.41e1365f9c290eaffd3028aab87f8c0a.r2.cloudflarestorage.com/resources/vy1oj8xtnp8r/gbm3jzmpvheo?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=66122c714e8f3c25fe21b7286cd32701/20250228/auto/s3/aws4_request&X-Amz-Date=20250228T062829Z&X-Amz-Expires=3600&X-Amz-Signature=4bab3e36c12f9d40dcda050c6f3592c0a45de8c0d16473dd682b0aa52ee36c55&X-Amz-SignedHeaders=host&x-id=GetObject'/>
            </div>
        </div>
        



        <div className='item'>
            <div className='image-box'>
                <img className='image'src={image4}/>
            </div>
            <div className='content'>
                <Details name='First year and Sophmore Internship' link= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnKUwwEW-efubdQ_RFrrcOFkCiSw8gQ1THkS5sec-CjQvusuOQLHANPc_izk-bSWEB91rT7beAaYBz/pubhtml'/>
            </div>
        </div>
        


        <div className='item'>
             <div className='image-box'>
                <img className='image' src={image5}/>
            </div>
            <div className='content'>
                <Details name='Notion Application Tracker' link= 'https://www.notion.com/templates/category/job-application-tracking'/>
            </div>
        </div>
        


        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image6}/>
            </div>
            <div className='content'>
                <Details name='CS Roadmap' link= 'https://revolutionarycode.notion.site/the-coding-directory-d9f707d0c1044591a2cffa5a7d750227'/>
            </div>
        </div>


        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image7}/>
            </div>
            <div className='content'>
                <Details name='App Ideas Collection' link= 'https://github.com/florinpop17/app-ideas'/>
            </div>
        </div>
            

        
        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image8}/>
            </div>
            <div className='content'>
                <Details name='Latex Resume Editor' link= 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs'/>
            </div>
        </div>

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image9}/>
            </div>
            <div className='content'>
                <Details name='Global AI Hackathons' link= 'https://lablab.ai/'/>
            </div>
        </div>

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image10}/>
            </div>
            <div className='content'>
                <Details name='Google ML Crash Course' link= 'https://developers.google.com/machine-learning/crash-course'/>
            </div>
        </div>

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image11}/>
            </div>
            <div className='content'>
                <Details name='Free Website Template' link= 'https://dribbble.com/'/>
            </div>
        </div>

        <div className='item'>
            <div className='image-box'>
                <img className='image' src={image12}/>
            </div>
            <div className='content'>
                <Details name='Tech Interview Handbook' link= 'https://www.techinterviewhandbook.org/'/>
            </div>
        </div>
    </div>
        
    </>    
  )
}

export default Shop