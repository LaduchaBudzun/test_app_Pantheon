<template>
  <div class="availability">
    <span>Availability</span>
    <div class="availability_radio">

        <section class="dark">
            <div class="all">
                <label >
                    <input type="radio" name="availability">
                    <span class="design"></span>
                    <span class="text">All</span>
                </label>
            </div>
            <div class="buy-now">
                <label >
                    <input type="radio" name="availability" >
                    <span class="design"></span>
                    <span class="text">Buy now</span>
                </label>
            </div>

            
        </section>
    </div>
   </div>
</template>

<script>
export default {
    name:'Availability',
    data() {
        return {
            availability:'all'
        }
    }
}
</script> 

<style lang='scss' scoped>
.availability {
  margin-top: 65px;
  max-width: 245px;
  span {
    font-weight: 800;
  }
}
.all {
  margin-top: 16px;
}
.buy-now {
  margin-top: 12px;
}
.dark {
  div {
    padding: 17px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid white;
  }
}
section {
  min-height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
}

section::before,
section::after {
  //   content: "";
  display: block;

  border-radius: 100%;

  position: absolute;
}

section::before {
  width: 30px;
  height: 30px;

  background: var(--primary);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);

  top: 18px;
  left: 18px;
}

section::after {
  width: 42px;
  height: 42px;

  border: 1px solid var(--primary);

  top: 11px;
  left: 11px;
}

.light {
  --primary: hsl(250, 100%, 44%);
  --other: hsl(0, 0%, 14%);

  background: hsl(0, 0%, 98%);
}

.dark {
  --primary: #eb5f33;
  --other: hsl(0, 0%, 90%);

  //   background: hsl(0, 0%, 10%);
}

/* h1 */
h1 {
  color: var(--other);
  padding: 8px 4px;
  border-bottom: 2px solid var(--other);
}

/* label */
label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  cursor: pointer;
  position: relative;
}

/* input */
input {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

/* .design */
.design {
  width: 30px;
  height: 30px;

  border: 1px solid var(--other);
  border-radius: 100%;
  margin-right: 16px;

  position: relative;
}

.design::before,
.design::after {
  content: "";
  display: block;

  width: inherit;
  height: inherit;

  border-radius: inherit;

  position: absolute;
  right: -1px;
  top: -1px;
  transform: scale(0);
  transform-origin: center center;
}

.design:before {
  background: var(--other);
  opacity: 0;
  transition: 0.3s;
}

.design::after {
  background: var(--primary);
  opacity: 0.4;
  transition: 0.6s;
}

/* .text */
.text {
  color: var(--other);
  font-weight: bold;
}

/* checked state */
input:checked + .design::before {
  opacity: 1;
  transform: scale(0.6);
}

/* other states */
input:hover + .design,
input:focus + .design {
  border: 1px solid var(--primary);
}

input:hover + .design:before,
input:focus + .design:before {
  background: var(--primary);
}

input:hover ~ .text {
  color: var(--primary);
}

input:focus + .design::after,
input:active + .design::after {
  opacity: 0.1;
  transform: scale(2.6);
}

.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 0%, 0.6);
  background: hsla(0, 0%, 98%, 0.6);
  font-size: 16px;
}
</style>