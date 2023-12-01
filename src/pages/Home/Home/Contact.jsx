

import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import TitleSection from './../../../components/TitleSection';
import { useForm } from "react-hook-form"

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)

  }

  return (
    <div>
      <TitleSection title='contact us '></TitleSection>
      <div className="text-center">
        <h1 className='text-2xl font-bold'>GET IN TOUCH</h1>
        <p>Etiam tristique venenatis metus, eget maximus elit mattis et. Suspendisse felis odio,
          Please Enter Your Comments*</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex sm:flex-col md:flex-row justify-center gap-5 lg:px-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
            {errors.name && <span>Name field is required</span>}

          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
            {errors.email && <span>Email field is required</span>}
          </div>
        </div>
        <div className=" flex sm:flex-col md:flex-row justify-center gap-5 lg:px-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input type="text" name="number" {...register("number", { required: true })} placeholder="Phone" className=" input input-bordered" required />
            {errors.number && <span>Phone number field is required</span>}

          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input type="text" name="subject" {...register("subject", { required: true })} placeholder="Subject" className=" input input-bordered" required />
            {errors.subject && <span>Subject field is required</span>}
          </div>
        </div>
        <div className="form-control w-full lg:px-20">
          <label className="label">
            <span className="label-text">Massage</span>
          </label>
          <input type="text" name="massage" {...register("massage", { required: true })} placeholder="Massage" className="py-24 input input-bordered" required />
          {errors.massage && <span>Massage field is required</span>}
        </div>
        <div className="text-center py-5"><button type="submit" className='btn btn-success '>send massage</button></div>
      </form>
    </div>
  );
};

export default Contact;