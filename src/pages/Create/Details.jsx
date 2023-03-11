import React, { useEffect } from "react";

export default function Details({ setStep, form, setForm }) {
  useEffect(() => {
    setStep(2);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // redirecting to the next page
    setPage((prev) => {
      return prev + 1;
    });
  };

  return (
    <section className="basis-1/2">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Enter the certificate details
        </h2>
      </div>

      <div className="mt-6">
        <form
          className="flex flex-col space-y-3 items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">Heading</span>
            </label>
            <input
              type="text"
              name="heading"
              value={form.heading}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-gray-100 shadow-md"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">
                Participant Name
              </span>
            </label>
            <input
              type="text"
              name="participantName"
              value={form.participantName}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-gray-100 shadow-md"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="textarea textarea-bordered h-auto w-80 bg-gray-100 shadow-md"
              placeholder="Type here"
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">
                Author Name
              </span>
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-gray-100 shadow-md"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold">Logo URL</span>
            </label>
            <input
              type="url"
              name="logo"
              value={form.logo}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-gray-100 shadow-md"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
