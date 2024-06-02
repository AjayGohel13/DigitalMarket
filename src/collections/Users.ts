import { CollectionConfig ,Access} from "payload/types";
 

export const Users: CollectionConfig = {
    slug: "users",
    auth: {
      verify:{
        generateEmailHTML:({token})=>{
          return `<a href = '${process.env.NEXT_APP_URL}/verify-email?token=${token}'>verify account</a>`
        }
      }
    },

    access:{
        read:()=>true,
        create:()=>true,
    },

      fields: [
        {
          name: 'role',
          defaultValue: 'user',
          required: true,
          // admin: {
          //       condition: () => false,
          //     },    
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
          ],
        },
        {
          name: "user_name",
          type:"text",
          required:true
      },
      {
        name: "City_Name",
        label: "City name for location",
        type: "text",
        required: true,
    },
    {
        name: "State_Name",
        label: "State name for location",
        type: "text",
        required: true,
    },
    {
        name: "Country",
        label: "Country",
        type: "text",
        required: true,
    },
    {
        name: "Pincode",
        label: "Pincode",
        type: "text",
        required: true,
    },
    {
        name: "Address",
        type: "textarea",
        label: "Address details",
        required: true,
    },
    {
        name: "Contect_Number",
        type: "text",
        label: "Contact Number",
        required: true,
    }
      
    ],
}