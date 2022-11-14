// export let data = [
//   //1
//   {
//     type: 'single_choice',
//     title: 'Stop 1: Customer Care Management',
//     question: 'What should we do to make sure we’re ready to receive orders from our customers? ',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest1_Normal.png",
//     correctImage: "Quest1_Right answer.png",
//     incorrectImage: "Quest1_Wrong answer.png",
//     choices: [{
//         text: 'Ensure the system data is complete and correct.',
//         correct: true,

//       },
//       {
//         text: 'Do nothing until you receive an order from the customer. ',
//         correct: false,
//       },
//       {
//         text: 'Document notes about your customer in a notebook or post-it notes.',
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>You’re off to a great start! This is correct.</h2>
//         <p>Our first step is to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
//         <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
//         `,
//       incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
//         <p>Your first step should have been to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
//         <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
//         `
//     }
//   },

//   //2
//   {
//     type: 'single_choice',
//     title: 'Stop 2: Order Intake',
//     question: `A one-off request has been received and requires a manual intervention on your part. A customer has a Special Delivery request. The customer wants the product loaded to a specific type of truck. Besides making sure the order is completed, what other action should you take?`,
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest2_Normal.png",
//     correctImage: "Quest2_Right answer.png",
//     incorrectImage: "Quest2_Wrong answer.png",
//     choices: [{
//         text: 'There is nothing else to do.',
//         correct: false,

//       },
//       {
//         text: 'Assume this is the transportation mode they want to receive going forward and update the system.',
//         correct: false,
//       },
//       {
//         text: 'Reach out to the customer to understand the need for the Special Delivery.',
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
//         <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
//         `,
//       incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
//         <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        
//         `
//     }
//   },

//   //2 batch
//   {
//     type: 'multiple_choice',
//     title: 'Bonus Question – Earn a Badge!',
//     question: 'In the Order Intake process, how can you be more proactive?',
//     instr: 'Select all that apply.',
//     selected: -1,
//     submitted: false,
//     score: 0,
//     batch: true,
//     image: "proactive.png",
//     correctImage: "batch_01.png",
//     incorrectImage: "batch_01_grey.png",
//     choices: [{
//         text: 'Make sure our systems and master data are updated with the correct customer details.',
//         correct: true,
//         selected: false
//       },
//       {
//         text: `Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.`,
//         correct: true,
//         selected: false
//       },
//       {
//         text: 'Inform other Customer Service team members by email that you’ve entered and confirmed the customer’s request.',
//         correct: false,
//         selected: false
//       },
//       {
//         text: 'After sending an automated order acknowledgement to the customer, call them to make sure they received the order confirmation.',
//         correct: false,
//         selected: false
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Good job! This is correct.</h2>
//         <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Cargill.</p>
//         <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners. </p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry. This isn’t correct.</h2>
//        <p>The correct answers are: </p>
//        <ul>
//        <li>Make sure our systems and master data are updated with the correct customer details.</li>
//        <li>Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.</li>
//         </ul>
//         <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Cargill.</p>
//         <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners.</p>

//         `
//     }
//   },

//   //3
//   {
//     type: 'multiple_choice',
//     title: 'Stop 3: Order Confirmation',
//     question: 'Which of the following are order confirmation steps that contribute to a seamless experience for our customers?',
//     instr: 'Select all that apply.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest3_Normal.png",
//     correctImage: "Quest3_Right answer.png",
//     incorrectImage: "Quest3_Wrong answer.png",
//     choices: [{
//         text: 'Confirm with CTL to ensure there were no issues with the order request.',
//         correct: true,

//       },
//       {
//         text: 'Actively monitor orders on credit hold.',
//         correct: true,
//       },
//       {
//         text: 'Explain to the customer why the order is priced the way it is.',
//         correct: false,
//       },
//       {
//         text: 'Ensure material availability is aligned to the shipment schedule.',
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>That was a tricky one, but you got it right! </h2>
//         <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>
//         `,
//       incorrect: `<h2 class='correct'>This was tricky, but sorry, that isn’t correct.</h2>
//       <p>The correct answers are:</p>
//       <ul>
//       <li>We confirm with CTL to ensure there were no issues with the order request.</li>
//       <li>We actively monitor orders on credit hold.</li>
//       <li>We ensure material availability is aligned to the shipment schedule.</li>
//       </ul>
//       <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>`
//     }
//   },

//   //4
//   {
//     type: 'single_choice',
//     title: 'Stop 4: Order Processing',
//     question: 'You’ve just been notified that a plant has experienced unplanned down time. You check with your customer and they desperately need the product before the original sourcing plant can provide it. What is your best course of action now?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest4_Normal.png",
//     correctImage: "Quest4_Right answer.png",
//     incorrectImage: "Quest4_Wrong answer.png",
//     choices: [{
//         text: 'Inform the customer we will not be able to deliver their order and are cancelling it.',
//         correct: false,
//       },
//       {
//         text: 'Pick a similar product and deliver that one to the customer.',
//         correct: false,
//       },
//       {
//         text: 'Change the source to a new location and let the customer know the issue has been resolved.',
//         correct: false,
//       },
//       {
//         text: `Work with internal cross-functional teams to identify a solution that best meets the customer’s requirements and then confirm next steps with the customer.`,
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Great job! That is correct.</h2>
//         <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>
//         `,
//       incorrect: `<h2 class='correct'>Oops. That isn’t correct.</h2>
//         <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>`,
//     }
//   },

//   //5
//   {
//     type: 'single_choice',
//     title: 'Stop 5: Order Fulfillment',
//     question: 'One of our trucks was en-route to a customer delivery when it got a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What should you do next?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest5_Normal.png",
//     correctImage: "Quest5_Right answer.png",
//     incorrectImage: "Quest5_Wrong answer.png",
//     choices: [{
//         text: 'Have CTL update the customer once they know when the product will be delivered.',
//         correct: false,
//       },
//       {
//         text: `Do nothing unless the customer reaches out to you.`,
//         correct: false,
//       },
//       {
//         text: 'Proactively inform the customer of the delay and when the new delivery time is expected to be.',
//         correct: true,
//       },
//       {
//         text: `Call the customer and assure them you are sending another truck to meet the original timeline.`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Perfect! That is correct.</h2>
//         <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry, but that isn’t correct.</h2>
//         <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        
// `
//     }
//   },

//   //6
//   /*
//   {
//     type: 'sort_order',
//     title: 'Stop 6: Order Support',
//     question: 'A large portion of our work in Customer Service comes from Order Support. Sort the items below into requests that fall under Customer Service Expertise, or ones that fall under Other Functional Expertise.',
//     instr: 'Select each item and drop them into the respective categories.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     sorting1_title: "Customer Service Expertise",
//     sorting2_title: "Other Functional Expertise",
//     sorting1: [
//       "General inquiries about our products",
//       "Rejected or returned orders",
//       "Order exceptions or escalations",
//       "Invoice disputes",
//       "Customer complaints",
//       "New customers"
//     ],
//     sorting2: [
//       "Customer segmentation rules",
//       "Entering customer orders",
//       "Logistics planning with CTL",
//       "Release of customer orders with overdue invoices"
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
//       <div class="flex sorting">
//         <div class="mr-20">
//           <div><b>Our Expertise</b></div>
//           <div class='dd_choice'>
//             <div class='choice'>General inquiries about our products</div>
//             <div class='choice'>Rejected or returned orders</div>
//             <div class='choice'>Order exceptions or escalations</div>
//             <div class='choice'>Invoice disputes</div>
//             <div class='choice'>Customer complaints</div>
//             <div class='choice'>New customers</div>
//           </div>
//         </div>
//         <div>
//           <div><b>Not Our Expertise</b></div> 
//           <div class='dd_choice'>
//             <div class='choice'>Customer segmentation rules</div>
//             <div class='choice'>Entering customer orders</div>
//             <div class='choice'>Logistics planning with CTL</div>
//             <div class='choice'>Release of customer orders with overdue invoices</div>
//           </div>
//         </div>
//       </div>
//       <br><br>
//         `,
//       incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
//         <p>Here is the correct answer.</p>
//         <div class="flex">
//           <div class="mr-20">
//             <p><b>Our Expertise</b></p>
//             <p>General inquiries about our products</p>
//             <p>Rejected or returned orders</p>
//             <p>Order exceptions or escalations</p>
//             <p>Invoice disputes</p>
//             <p>Customer complaints</p>
//             <p>New customers</p>
//           </div>
//           <div>
//             <p><b>Not Our Expertise</b></p>
//             <p>Customer segmentation rules</p>
//             <p>Entering customer orders</p>
//             <p>Logistics planning with CTL</p>
//             <p>Release of customer orders with overdue invoices</p>
//           </div>
//         </div>
//         `
//     }
//   },
// */
// //6
// {
//   type: 'multiple_choice',
//   title: 'Stop 6: Order Support',
//   question: 'A large portion of our time in customer service is spent on Order Support activities. Which of the following would be examples of Order Support?',
//   instr: 'Select all that apply.',
//   selected: -1,
//   submitted: false,
//   score: 100,
//   image_text: "Customer",
//   image: "Quest7_Normal.png",
//   correctImage: "Quest7_Right answer.png",
//   incorrectImage: "Quest7_Wrong answer.png",
//   choices: [{
//       text: 'Manage order processing exceptions',
//       correct: true,

//     },
//     {
//       text: 'New customer set-up',
//       correct: false,
//     },
//     {
//       text: 'Support customer disputes',
//       correct: true,
//     },
//     {
//       text: 'Manage customer complaints and inquiries ',
//       correct: true,
//     },
//     {
//       text: 'Quote a price for the customer ',
//       correct: false,
//     }
//   ],
//   feedback: {
//     correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
//       <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
//       <ul>
//       <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
//       <li>Work with cross-functional partners to get to a complete solution for the customer</li>
//       <li>Time spent in this area can make all other customer interactions go more smoothly</li>
//       </ul>
//       `,
//     incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
//     <p>The correct answer is:</p>
//     <ul>
//     <li>Manage order processing exceptions</li>
//     <li>Support customer disputes</li>
//     <li>Manage customer complaints and inquiries</li>
//     </ul>
//     <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
//     <ul>
//     <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
//     <li>Work with cross-functional partners to get to a complete solution for the customer</li>
//     <li>Time spent in this area can make all other customer interactions go more smoothly</li>
//     </ul>`
//   }
// },
//   //6 batch
//   {
//     type: 'single_choice',
//     title: 'Bonus Question – Earn a Badge!',
//     question: 'In the Order Support process, how can you be more proactive?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 0,
//     batch: true,
//     image: "proactive.png",
//     correctImage: "batch_01.png",
//     incorrectImage: "batch_01_grey.png",
//     choices: [{
//         text: `Customer Complaint: If the complaint is about quality, route the case to the Quality Team. Continue to follow up until the complaint is resolved and communicated to the customer.`,
//         correct: true,
//       },
//       {
//         text: `Financial Dispute: Forward the dispute notification from the customer to the CTC team and do nothing more.`,
//         correct: false,
//       },
//       {
//         text: 'Technical Issues: Multiple customers reach out saying they cannot download the documents from the customer portal. You manually send the documents to the customers and consider the case closed.',
//         correct: false,
//       }
//     ],
//     feedback: {
//       //choice_feedback: false,
//       correct: `<h2 class='correct'>You got it right!</h2>
//       <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
//       <p>Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
//         `,
//         incorrect: [`<h2 class='correct'>That isn’t quite right.</h2>
//         <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
//         <p>Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
//         `]
//     }
//   },

//   // 10 miles 
//   {
//     type: 'single_choice',
//     title: 'Voice of Customer',
//     question: 'Your team received initial results from the latest Voice of the customer (VoC) survey from the VoC COE Team. What should you do next?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 200,
//     image_text: "Voice of Customer",
//     image: "customer.png",
//     correctImage: "",
//     incorrectImage: "",
//     choices: [{
//         text: 'Archive the results for yourself.',
//         correct: false,
//       },
//       {
//         text: `Forward the results to customers.`,
//         correct: false,
//       },
//       {
//         text: 'Work to understand the data behind it and to determine improvement actions.',
//         correct: true,
//       },
//       {
//         text: `Ask VoC COE to resolve the customer issues.`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       choice_feedback: false,
//       correct: `<h2 class='correct'>Exactly. You are correct.</h2>
//         <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
//         <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
//         <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
//         `,
//       incorrect: `<h2 class='correct'>No. That is incorrect.</h2>
//       <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
//       <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
//       <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
//       `
//     }
//   },

//   {
//     type: 'single_choice',
//     title: 'Customer Focus',
//     question: `
//     <p>Every touchpoint with a customer is an opportunity to learn and better equip the business with information by:</p>
//     <ul><li>Asking meaningful questions</li>
//     <li>Validating key customer details, and</li>
//     <li>Documenting notes in Salesforce to share the information with others across Cargill</li>
//     </ul>
//     <p>Is this statement entirely true or entirely false?</p>
//     `,
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 200,
//     image_text: "Voice of Customer",
//     image: "customer.png",
//     correctImage: "",
//     incorrectImage: "",
//     choices: [{
//         text: 'True',
//         correct: true,

//       },
//       {
//         text: `False`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Very good. That is correct!</h2>
//         <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Cargill to fill more of their business needs as well.</p>
//         <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Cargill and our customers.</p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry. That’s incorrect.</h2>
//         <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Cargill to fill more of their business needs as well.</p>
//         <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Cargill and our customers.</p>
//         `
//     }
//   },
// ];



export let data = [
  //1
  {
    type: 'single_choice',
    title: 'Stop 1: Customer Account Management',
    question: 'What should we do to make sure we’re ready to receive orders from our customers? ',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest1_Normal.png",
    correctImage: "Quest1_Right answer.png",
    incorrectImage: "Quest1_Wrong answer.png",
    choices: [{
        text: 'Ensure the system data is complete and correct.',
        correct: true,

      },
      {
        text: 'Do nothing until you receive an order from the customer. ',
        correct: false,
      },
      {
        text: 'Document notes about your customer in a notebook or post-it notes.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>You’re off to a great start! This is correct.</h2>
        <p>Our first step is to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
        <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>Your first step should have been to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
        <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
        `
    }
  },
//2
  {
    type: 'single_choice',
    title: 'Stop 2: Contract Management',
    question: 'You receive a call from one of our farmer clients asking to modify one of the conditions of his last contract. First you validate the request with the commercial representative and then you issue the corresponding amendment for the new condition in the system. You know that the amendment requires the client’s signature, what steps should you follow?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest1_Normal.png",
    correctImage: "Quest1_Right answer.png",
    incorrectImage: "Quest1_Wrong answer.png",
    choices: [{
        text: 'You don’t need to do anything else.',
        correct: false,

      },
      {
        text: 'Print a copy and save it in the drawer for when the client visits the office he can sign it manually',
        correct: false,
      },
      {
        text: 'Call the client proactively and let him know that he has the new document available in a platform to be digitally signed',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
        <p>For any change in the existing contract and for issuing corresponding amendments, call the farmer clients proactively and inform them that the new document is available in the platform, which they needs to sign digitally.</p>`,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>For any change in the existing contract and for issuing corresponding amendments, call the farmer clients proactively and inform them that the new document is available in the platform, which they needs to sign digitally.</p>
        `
    }
  },
  //3
  {
    type: 'single_choice',
    title: 'Stop 3: Order Intake',
    question: `A one-off request has been received and requires a manual intervention on your part. A customer has a Special Delivery request. The customer wants the product loaded to a specific type of truck. Besides making sure the order is completed, what other action should you take?`,
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest2_Normal.png",
    correctImage: "Quest2_Right answer.png",
    incorrectImage: "Quest2_Wrong answer.png",
    choices: [{
        text: 'There is nothing else to do.',
        correct: false,

      },
      {
        text: 'Assume this is the transportation mode they want to receive going forward and update the system.',
        correct: false,
      },
      {
        text: 'Reach out to the customer to understand the need for the Special Delivery.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
        <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        
        `
    }
  },

  //3 batch
  {
    type: 'multiple_choice',
    title: 'Bonus Question – Earn a Badge!',
    question: 'In the Order Intake process, how can you be more proactive?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 0,
    batch: true,
    image: "proactive.png",
    correctImage: "batch_01.png",
    incorrectImage: "batch_01_grey.png",
    choices: [{
        text: 'Make sure our systems and master data are updated with the correct customer details.',
        correct: true,
        selected: false
      },
      {
        text: `Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.`,
        correct: true,
        selected: false
      },
      {
        text: 'Inform other Customer Service team members by email that you’ve entered and confirmed the customer’s request.',
        correct: false,
        selected: false
      },
      {
        text: 'After sending an automated order acknowledgement to the customer, call them to make sure they received the order confirmation.',
        correct: false,
        selected: false
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Good job! This is correct.</h2>
        <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Organization.</p>
        <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners. </p>
        `,
      incorrect: `<h2 class='correct'>Sorry. This isn’t correct.</h2>
       <p>The correct answers are: </p>
       <ul>
       <li>Make sure our systems and master data are updated with the correct customer details.</li>
       <li>Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.</li>
        </ul>
        <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Organization.</p>
        <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners.</p>

        `
    }
  },

  //4
  {
    type: 'multiple_choice',
    title: 'Stop 4: Order Confirmation',
    question: 'Which of the following are order confirmation steps that contribute to a seamless experience for our customers?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest3_Normal.png",
    correctImage: "Quest3_Right answer.png",
    incorrectImage: "Quest3_Wrong answer.png",
    choices: [{
        text: 'Confirm with CTL to ensure there were no issues with the order request.',
        correct: true,

      },
      {
        text: 'Actively monitor orders on credit hold.',
        correct: true,
      },
      {
        text: 'Explain to the customer why the order is priced the way it is.',
        correct: false,
      },
      {
        text: 'Ensure material availability is aligned to the shipment schedule.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>That was a tricky one, but you got it right! </h2>
        <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>
        `,
      incorrect: `<h2 class='correct'>This was tricky, but sorry, that isn’t correct.</h2>
      <p>The correct answers are:</p>
      <ul>
      <li>We confirm with CTL to ensure there were no issues with the order request.</li>
      <li>We actively monitor orders on credit hold.</li>
      <li>We ensure material availability is aligned to the shipment schedule.</li>
      </ul>
      <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>`
    }
  },

  //5
  {
    type: 'single_choice',
    title: 'Stop 5: Contract / Order Processing',
    question: 'You’ve just been notified that a plant has experienced unplanned down time. You check with your customer and they desperately need the product before the original sourcing plant can provide it. What is your best course of action now?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest4_Normal.png",
    correctImage: "Quest4_Right answer.png",
    incorrectImage: "Quest4_Wrong answer.png",
    choices: [{
        text: 'Inform the customer we will not be able to deliver their order and are cancelling it.',
        correct: false,
      },
      {
        text: 'Pick a similar product and deliver that one to the customer.',
        correct: false,
      },
      {
        text: 'Change the source to a new location and let the customer know the issue has been resolved.',
        correct: false,
      },
      {
        text: `Work with internal cross-functional teams to identify a solution that best meets the customer’s requirements and then confirm next steps with the customer.`,
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! That is correct.</h2>
        <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>
        `,
      incorrect: `<h2 class='correct'>Oops. That isn’t correct.</h2>
        <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>`,
    }
  },

  //6
  {
    type: 'single_choice',
    title: 'Stop 6: Contract / Order Fulfillment',
    question: 'One of our trucks was en-route to a customer delivery when it got a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What should you do next?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest5_Normal.png",
    correctImage: "Quest5_Right answer.png",
    incorrectImage: "Quest5_Wrong answer.png",
    choices: [{
        text: 'Have CTL update the customer once they know when the product will be delivered.',
        correct: false,
      },
      {
        text: `Do nothing unless the customer reaches out to you.`,
        correct: false,
      },
      {
        text: 'Proactively inform the customer of the delay and when the new delivery time is expected to be.',
        correct: true,
      },
      {
        text: `Call the customer and assure them you are sending another truck to meet the original timeline.`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Perfect! That is correct.</h2>
        <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        `,
      incorrect: `<h2 class='correct'>Sorry, but that isn’t correct.</h2>
        <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        
`
    }
  },

  //7
  {
    type: 'multiple_choice',
    title: 'Stop 7: Contract Application, Settlement and Invoice',
    question: 'In a seamless application and settlement process, how can you be more proactive to keep all the contracts prepared for settlement when fulfilled?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest3_Normal.png",
    correctImage: "Quest3_Right answer.png",
    incorrectImage: "Quest3_Wrong answer.png",
    choices: [{
        text: 'Collecting the contract details and raising inquiries to stakeholders in advance.',
        correct: true,

      },
      {
        text: 'Receiving quality claims and work with other areas to develop resolution plans with agility.',
        correct: true,
      },
      {
        text: 'Monitoring and validating corresponding third-party charges.',
        correct: true,
      },
      {
        text: 'Verifying payment terms.',
        correct: true,
      },
      {
        text: 'Asking the customer if he thinks there is something missing to fulfill his contract.',
        correct: false,
      },
      {
        text: 'Starting to review the contract when the client calls to ask for status.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Good thinking. That is correct!</h2>
        <p>For a seamless contract application and settlement process, ensure you collect contract details, raise inquiries to stakeholders, receive  quality claims, work with other areas to resolve contract issues with agility, monitor and validate corresponding third-party charges and verify payment terms.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! That isn’t correct!</h2>
      <p>For a seamless contract application and settlement process, it’s important to be proactive in identifying issues. Ensure you collect contract details, raise inquiries to stakeholders, receive quality claims, work with other areas to resolve contract issues with agility, monitor and validate corresponding third-party charges and verify payment terms.</p>`
    }
  },

  //6
  /*
  {
    type: 'sort_order',
    title: 'Stop 6: Order Support',
    question: 'A large portion of our work in Customer Service comes from Order Support. Sort the items below into requests that fall under Customer Service Expertise, or ones that fall under Other Functional Expertise.',
    instr: 'Select each item and drop them into the respective categories.',
    selected: -1,
    submitted: false,
    score: 100,
    sorting1_title: "Customer Service Expertise",
    sorting2_title: "Other Functional Expertise",
    sorting1: [
      "General inquiries about our products",
      "Rejected or returned orders",
      "Order exceptions or escalations",
      "Invoice disputes",
      "Customer complaints",
      "New customers"
    ],
    sorting2: [
      "Customer segmentation rules",
      "Entering customer orders",
      "Logistics planning with CTL",
      "Release of customer orders with overdue invoices"
    ],
    feedback: {
      correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
      <div class="flex sorting">
        <div class="mr-20">
          <div><b>Our Expertise</b></div>
          <div class='dd_choice'>
            <div class='choice'>General inquiries about our products</div>
            <div class='choice'>Rejected or returned orders</div>
            <div class='choice'>Order exceptions or escalations</div>
            <div class='choice'>Invoice disputes</div>
            <div class='choice'>Customer complaints</div>
            <div class='choice'>New customers</div>
          </div>
        </div>
        <div>
          <div><b>Not Our Expertise</b></div> 
          <div class='dd_choice'>
            <div class='choice'>Customer segmentation rules</div>
            <div class='choice'>Entering customer orders</div>
            <div class='choice'>Logistics planning with CTL</div>
            <div class='choice'>Release of customer orders with overdue invoices</div>
          </div>
        </div>
      </div>
      <br><br>
        `,
      incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
        <p>Here is the correct answer.</p>
        <div class="flex">
          <div class="mr-20">
            <p><b>Our Expertise</b></p>
            <p>General inquiries about our products</p>
            <p>Rejected or returned orders</p>
            <p>Order exceptions or escalations</p>
            <p>Invoice disputes</p>
            <p>Customer complaints</p>
            <p>New customers</p>
          </div>
          <div>
            <p><b>Not Our Expertise</b></p>
            <p>Customer segmentation rules</p>
            <p>Entering customer orders</p>
            <p>Logistics planning with CTL</p>
            <p>Release of customer orders with overdue invoices</p>
          </div>
        </div>
        `
    }
  },
*/
//8
{
  type: 'multiple_choice',
  title: 'Stop 8: Contract / Order Support',
  question: 'A large portion of our time in customer service is spent on Contract / Order Support activities. Which of the following would be examples of Contract / Order Support?',
  instr: 'Select all that apply.',
  selected: -1,
  submitted: false,
  score: 100,
  image_text: "Customer",
  image: "Quest7_Normal.png",
  correctImage: "Quest7_Right answer.png",
  incorrectImage: "Quest7_Wrong answer.png",
  choices: [{
      text: 'Manage contract / order processing exceptions',
      correct: true,

    },
    {
      text: 'New customer set-up',
      correct: false,
    },
    {
      text: 'Support customer disputes',
      correct: true,
    },
    {
      text: 'Manage customer complaints and inquiries ',
      correct: true,
    },
    {
      text: 'Quote a price for the customer ',
      correct: false,
    }
  ],
  feedback: {
    correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
      <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
      <ul>
      <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
      <li>Work with cross-functional partners to get to a complete solution for the customer</li>
      <li>Time spent in this area can make all other customer interactions go more smoothly</li>
      </ul>
      `,
    incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
    <p>The correct answer is:</p>
    <ul>
    <li>Manage contract / order processing exceptions</li>
    <li>Support customer disputes</li>
    <li>Manage customer complaints and inquiries</li>
    </ul>
    <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
    <ul>
    <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
    <li>Work with cross-functional partners to get to a complete solution for the customer</li>
    <li>Time spent in this area can make all other customer interactions go more smoothly</li>
    </ul>`
  }
},
  //8 batch
  {
    type: 'single_choice',
    title: 'Bonus Question – Earn a Badge!',
    question: 'In the Contract / Order Support process, how can you be more proactive?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 0,
    batch: true,
    image: "proactive.png",
    correctImage: "batch_01.png",
    incorrectImage: "batch_01_grey.png",
    choices: [{
        text: `Customer Complaint: If the complaint is about quality, route the case to the Quality Team. Continue to follow up until the complaint is resolved and communicated to the customer.`,
        correct: true,
      },
      {
        text: `Financial Dispute: Forward the dispute notification from the customer to the CTC team and do nothing more.`,
        correct: false,
      },
      {
        text: 'Technical Issues: Multiple customers reach out saying they cannot download the documents from the customer portal. You manually send the documents to the customers and consider the case closed.',
        correct: false,
      }
    ],
    feedback: {
      //choice_feedback: false,
      correct: `<h2 class='correct'>You got it right!</h2>
      <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
      <p>Contract / Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
        `,
        incorrect: [`<h2 class='correct'>That isn’t quite right.</h2>
        <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
        <p>Contract / Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
        `]
    }
  },

  // 10 miles 
  {
    type: 'single_choice',
    title: 'Voice of Customer',
    question: 'Your team received initial results from the latest Voice of the customer (VoC) survey from the VoC COE Team. What should you do next?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 200,
    image_text: "Voice of Customer",
    image: "customer.png",
    correctImage: "",
    incorrectImage: "",
    choices: [{
        text: 'Archive the results for yourself.',
        correct: false,
      },
      {
        text: `Forward the results to customers.`,
        correct: false,
      },
      {
        text: 'Work to understand the data behind it and to determine improvement actions.',
        correct: true,
      },
      {
        text: `Ask VoC COE to resolve the customer issues.`,
        correct: false,
      }
    ],
    feedback: {
      choice_feedback: false,
      correct: `<h2 class='correct'>Exactly. You are correct.</h2>
        <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
        <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
        <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
        `,
      incorrect: `<h2 class='correct'>No. That is incorrect.</h2>
      <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
      <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
      <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
      `
    }
  },

  {
    type: 'single_choice',
    title: 'Customer Focus',
    question: `
    <p>Every touchpoint with a customer is an opportunity to learn and better equip the business with information by:</p>
    <ul><li>Asking meaningful questions</li>
    <li>Validating key customer details, and</li>
    <li>Documenting notes in Salesforce to share the information with others across Organization</li>
    </ul>
    <p>Is this statement entirely true or entirely false?</p>
    `,
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 200,
    image_text: "Voice of Customer",
    image: "customer.png",
    correctImage: "",
    incorrectImage: "",
    choices: [{
        text: 'True',
        correct: true,

      },
      {
        text: `False`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Very good. That is correct!</h2>
        <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Organization to fill more of their business needs as well.</p>
        <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Organization and our customers.</p>
        `,
      incorrect: `<h2 class='correct'>Sorry. That’s incorrect.</h2>
        <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Organization to fill more of their business needs as well.</p>
        <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Organization and our customers.</p>
        `
    }
  },
];