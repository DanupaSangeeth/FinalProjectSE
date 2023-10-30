import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "./select.css"


function Department() {
 return(
  <div class="formbold-main-wrapper">
 
  <div class="formbold-form-wrapper">
         <img src=""/>
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label"> Name </label>

        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            class="formbold-form-input" required
          />

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            class="formbold-form-input" required
          />
        </div>
      </div>

      <div class="formbold-mb-3">
        <label for="age" class="formbold-form-label"> Age </label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="ex:25"
          class="formbold-form-input" required
        />
      </div>

      <div class="formbold-mb-3">
        <label for="dob" class="formbold-form-label"> Date of Birth </label>
        <input type="date" name="dob" id="dob" class="formbold-form-input" required />
      </div>

      <div class="formbold-mb-3">
        <label class="formbold-form-label">Gender</label>

        <select class="formbold-form-input" name="occupation" id="occupation">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div class="formbold-mb-3">
        <label for="email" class="formbold-form-label"> Email </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          class="formbold-form-input" required
        />
      </div>

      <div class="formbold-mb-3">
        <label for="address" class="formbold-form-label"> Address </label>

        <input
          type="text"
          name="address"
          id="address"
          placeholder="Street address"
          class="formbold-form-input formbold-mb-3" required
        />
        <input
          type="text"
          name="address2"
          id="address2"
          placeholder="Street address line 2"
          class="formbold-form-input" required
        />
      </div>

      <div class="formbold-mb-3 formbold-input-wrapp">
        <label for="phone" class="formbold-form-label"> Phone </label>

        <div>
          <input
            
            type="text"
            name="areacode"
            id="areacode"
            placeholder="Area code"
            class="formbold-form-input formbold-w-45" required
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            class="formbold-form-input" required
          />
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="post" class="formbold-form-label"> Post/Zip code </label>
          <input
            type="text"
            name="post"
            id="post"
            placeholder="ex:8976"
            class="formbold-form-input" required
          />
        </div>
        <div>
          <label for="city" class="formbold-form-label"> City </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="ex: New York"
            class="formbold-form-input" required
          />
        </div>
      </div>

      <div class="formbold-mb-3">
        <label for="upload" class="formbold-form-label">
          Upload your Photo
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          class="formbold-form-input formbold-form-file"
        />
      </div>
      <div class="formbold-mb-3">
        <label for="upload" class="formbold-form-label">
          Upload Front side of NIC
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          class="formbold-form-input formbold-form-file"
        />
      </div>
      <div class="formbold-mb-3">
        <label for="upload" class="formbold-form-label">
          Upload Back side of NIC
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          class="formbold-form-input formbold-form-file"
        />
      </div>
      <div class="formbold-mb-3">
        <label for="upload" class="formbold-form-label">
          Upload Medical
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          class="formbold-form-input formbold-form-file"
        />
      </div>

      <div class="formbold-checkbox-wrapper">
        <label for="supportCheckbox" class="formbold-checkbox-label">
          <div class="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              class="formbold-input-checkbox"
            />
            <div class="formbold-checkbox-inner">
              <span class="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  class="formbold-stroke-current"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d=""
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>

      <button class="formbold-btn">Submit</button>
    </form>
  </div>
</div>
 )
}

export default Department;