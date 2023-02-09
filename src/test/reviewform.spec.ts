import { mount } from "@vue/test-utils"
import ReviewComponent from "src/components/ReviewComponent.vue"
import { describe, it, expect } from "vitest"
import store from "src/store/index.js"
import router from "src/App.vue"

describe("ReviewComponent", () => {
    it("should pass if component loads properly", () => {
        const wrapper = mount(ReviewComponent, {
            global: {
                plugins: [store, router]
            }
        })
        expect(wrapper.exists()).toBeTruthy()
    })

    it("should pass if submit button loads properly", () => {
        const wrapper = mount(ReviewComponent, {
            global: {
                plugins: [store, router]
            }
        })
        const submitButton = wrapper.find("#submit")
        expect(submitButton.exists()).toBeTruthy()
        expect(submitButton.text()).toContain("Submit Review")
        expect(submitButton.attributes('disabled')).toBeDefined()
    })

    it("should pass if form is valid", () => {
        const wrapper = mount(ReviewComponent, {
            global: {
                plugins: [store, router]
            }
        })
        wrapper.vm.$data.name = 'Ola Nordmann'
        wrapper.vm.$data.email = 'ola.nordmann@mail.com'
        wrapper.vm.$data.review = 'This is a good app'

        expect(wrapper.vm.disableSubmit).toBe(false)
    })

    it("should pass if form is invalid", () => {
        const wrapper = mount(ReviewComponent, {
            global: {
                plugins: [store, router]
            }
        })
        wrapper.vm.$data.name = 'Ola Nordmann'
        wrapper.vm.$data.email = 'ola.nordmann@mail.com'
        wrapper.vm.$data.review = ''

        expect(wrapper.vm.disableSubmit).toBe(true)
    })
})