import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CreateCharacter({
  characters,
  loggedIn,
  setCharacters,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      mainCharacter: "true",
      trueClass: "",
      gender: "",
      level: undefined,
      quote: "",
      slug: "",
      img: [],
      appearance: "",
      personality: "",
      classes: "",
      skills: "",
      shortDesc: "",
      description: "",
    },
    onSubmit: (values) => {
      let imgURL = URL.createObjectURL(values.img[0]);
      let classes = values.classes.split(", ");
      let skills = values.skills.split(", ");
      let mainCharacter = values.mainCharacter === "true" ? true : false;
      let newCharacter = {
        name: values.name,
        class: values.class,
        trueClass: values.trueClass,
        gender: values.gender,
        level: values.level,
        quote: values.quote,
        slug: values.slug,
        img: imgURL,
        appearance: values.appearance,
        personality: values.personality,
        classes,
        skills,
        shortDesc: values.shortDesc,
        description: values.description,
        mainCharacter,
      };
      if (characters.find((element) => element.name === newCharacter.name)) {
        alert("Character already exists");
      } else {
        setCharacters([...characters, newCharacter]);
        navigate(`/characters/${newCharacter.slug}`);
      }
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Field can't be empty!"),
      class: Yup.string().required("Field can't be empty!"),
      mainCharacter: Yup.string().required("Field can't be empty!"),
      trueClass: Yup.string().required("Field can't be empty!"),
      gender: Yup.string().required("Field can't be empty!"),
      level: Yup.number()
        .required("Field can't be empty!")
        .typeError("Level has to be a number"),
      quote: Yup.string().required("Field can't be empty!"),
      slug: Yup.string().required("Field can't be empty!"),
      appearance: Yup.string().required("Field can't be empty!"),
      personality: Yup.string().required("Field can't be empty!"),
      classes: Yup.string().required("Field can't be empty!"),
      skills: Yup.string().required("Field can't be empty!"),
      shortDesc: Yup.string().required("Field can't be empty!"),
      description: Yup.string().required("Field can't be empty!"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="new-character-form">
        <div className="new-character-item">
          <label htmlFor="name">Character Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="class">Character Class:</label>
          <input
            type="text"
            name="class"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.class}
          />
          {formik.touched.class && formik.errors.class ? (
            <div className="error">{formik.errors.class}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="trueClass">Character True Class:</label>
          <input
            type="text"
            name="trueClass"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.trueClass}
          />
          {formik.touched.trueClass && formik.errors.trueClass ? (
            <div className="error">{formik.errors.trueClass}</div>
          ) : null}
        </div>
        <div className="radio">
          <input
            type="radio"
            name="mainCharacter"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="true"
          />
          <label htmlFor="mainCharacter">Main Character</label>
          <input
            type="radio"
            name="mainCharacter"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="false"
          />
          <label htmlFor="mainCharacter">Side Character</label>
        </div>
        <div className="new-character-item">
          <label htmlFor="gender">Character Gender:</label>
          <input
            type="text"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          />
          {formik.touched.gender && formik.errors.gender ? (
            <div className="error">{formik.errors.gender}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="level">Character Level:</label>
          <input
            type="text"
            name="level"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.level}
          />
          {formik.touched.level && formik.errors.level ? (
            <div className="error">{formik.errors.level}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="quote">Character Quote:</label>
          <textarea
            className="comment-area"
            cols="30"
            rows="5"
            name="quote"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quote}
          ></textarea>
          {formik.touched.quote && formik.errors.quote ? (
            <div className="error">{formik.errors.quote}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="slug">Character Slug:</label>
          <input
            type="text"
            name="slug"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.slug}
          />
          {formik.touched.slug && formik.errors.slug ? (
            <div className="error">{formik.errors.slug}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="img">Character Image:</label>
          <input
            type="file"
            name="img"
            onChange={(event) => {
              const files = event.target.files;
              let myFiles = Array.from(files);
              formik.setFieldValue("img", myFiles);
            }}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="new-character-item">
          <label htmlFor="appearance">Character Appearance:</label>
          <textarea
            className="comment-area"
            cols="30"
            rows="5"
            name="appearance"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appearance}
          ></textarea>
          {formik.touched.appearance && formik.errors.appearance ? (
            <div className="error">{formik.errors.appearance}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="personality">Character Personality:</label>
          <textarea
            className="comment-area"
            cols="30"
            rows="5"
            name="personality"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personality}
          ></textarea>
          {formik.touched.personality && formik.errors.personality ? (
            <div className="error">{formik.errors.personality}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="classes">Character Classes:</label>
          <div className="small-message">
            Seperate each class with comma and space (Necromancer, Pet Owner,
            ...)
          </div>
          <input
            type="text"
            name="classes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.classes}
            style={{ width: "100%" }}
          />
          {formik.touched.classes && formik.errors.classes ? (
            <div className="error">{formik.errors.classes}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="skills">Character Skills:</label>
          <div className="small-message">
            Seperate each skill with comma and space (Magical Cooking, Immortal
            Moment, ...)
          </div>
          <input
            type="text"
            name="skills"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skills}
            style={{ width: "100%" }}
          />
          {formik.touched.skills && formik.errors.skills ? (
            <div className="error">{formik.errors.skills}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="shortDesc">Character Short Description:</label>
          <textarea
            className="comment-area"
            cols="30"
            rows="5"
            name="shortDesc"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shortDesc}
          ></textarea>
          {formik.touched.shortDesc && formik.errors.shortDesc ? (
            <div className="error">{formik.errors.shortDesc}</div>
          ) : null}
        </div>
        <div className="new-character-item">
          <label htmlFor="description">Character Description:</label>
          <textarea
            className="comment-area"
            cols="30"
            rows="5"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
