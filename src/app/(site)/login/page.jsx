import GoogleLogin from "@/app/components/GoogleLogin";
import React from "react";

export default function SocialLogin() {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col shadow-2xl">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login with social accounts</h1>
          <GoogleLogin />
          {/* <p className="py-6">
      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
      excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
      a id nisi.
    </p> */}
        </div>
        {/* <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div className="card-body">
      <fieldset className="fieldset">
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  </div> */}
      </div>
    </div>
  );
}
