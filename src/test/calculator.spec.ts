import { mount } from "@vue/test-utils"
import CalculatorComponent from "src/components/CalculatorComponent.vue"
import { describe, it, expect } from "vitest"

describe("CalculatorComponent", () => {
    it("should pass if component loads properly", () => {
        const wrapper = mount(CalculatorComponent, {})
        expect(wrapper.exists()).toBeTruthy()
    })

    it("should pass if display works properly"), () => {
        const wrapper = mount(CalculatorComponent, {})
        wrapper.vm.appendToDisplay("1")
        wrapper.vm.appendToDisplay("+")
        wrapper.vm.appendToDisplay("2")
        expect(wrapper.vm.display === "1+2")
    }

    it("should pass if calculations work properly"), () => {
        const wrapper = mount(CalculatorComponent, {})
        wrapper.vm.appendToDisplay("1")
        wrapper.vm.appendToDisplay("+")
        wrapper.vm.appendToDisplay("2")
        wrapper.vm.appendToDisplay("=")
        expect(wrapper.vm.display === "3")

        wrapper.vm.appendToDisplay("C")
        wrapper.vm.appendToDisplay("4")
        wrapper.vm.appendToDisplay("-")
        wrapper.vm.appendToDisplay("2")
        wrapper.vm.appendToDisplay("=")
        expect(wrapper.vm.display === "2")

        wrapper.vm.appendToDisplay("C")
        wrapper.vm.appendToDisplay("5")
        wrapper.vm.appendToDisplay("*")
        wrapper.vm.appendToDisplay("3")
        wrapper.vm.appendToDisplay("=")
        expect(wrapper.vm.display === "15")

        wrapper.vm.appendToDisplay("C")
        wrapper.vm.appendToDisplay("10")
        wrapper.vm.appendToDisplay("/")
        wrapper.vm.appendToDisplay("5")
        wrapper.vm.appendToDisplay("=")
        expect(wrapper.vm.display === "2")
    }

    it("should pass if ans works properly"), () => {
        const wrapper = mount(CalculatorComponent, {})
        wrapper.vm.appendToDisplay("1")
        wrapper.vm.appendToDisplay("+")
        wrapper.vm.appendToDisplay("2")
        wrapper.vm.appendToDisplay("=")
        wrapper.vm.appendToDisplay("C")
        wrapper.vm.appendToDisplay("1")
        wrapper.vm.appendToDisplay("+")
        wrapper.vm.appendToDisplay("Ans")
        wrapper.vm.appendToDisplay("=")
        expect(wrapper.vm.display === "4")
    }
})