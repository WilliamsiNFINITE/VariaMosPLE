import {stringify} from "querystring";

const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/graph.feature', {tagFilter: '@included'});
import '@testing-library/jest-dom/extend-expect';
import ProjectService from "../../Application/Project/ProjectService";
import React from "react";
import userEvent from "@testing-library/user-event";
import LanguageManagement from "../../UI/ProjectManagement/LanguageManagement";


defineFeature(feature, (test)=> {


    const givenAnElementAndAName = (given) => {
        given(/^an existing (.*) called (.*)$/, (arg0, arg1) => {
            expect(1).toBe(0)
        });
    }
    const givenASpecificName = (given) => {
        given(/^a specific (.*)$/, (arg0) => {
            expect(1).toBe(0)
        });

    };
    const givenTheMenuIsInAState = (given) => {
        given(/^the menu is "(.*)"$/, (arg0) => {
            expect(1).toBe(0)
        });
    };

    const whenUserChangesNameOfElement = (when) => {
        when(/^the user changes the name of the (.*) to (.*)$/, (arg0, arg1) => {
            expect(1).toBe(0)
        });
    }
    const whenUserClicksOnMenuButton = (when) =>{
        when('the user clicks on the menu button', () => {
            expect(1).toBe(0)
        });
    }
    const whenUserCreatesSomeThingWithAName = (when) =>{
        when(/^the user creates an (.*) called (.*)$/, (arg0, arg1) => {
            expect(1).toBe(0)
        });

    }
    const whenUserDeletesElementOnMenu = (when) => {
        when(/^the user deletes (.*)$/, (arg0) => {
            expect(1).toBe(0)
        });
    }

    const thenTheMenuChangesState = (then) =>{
        then(/^the side menu "(.*)"$/, (arg0) => {
            expect(1).toBe(0)
        });
    }
    const thenTheNameShouldAppear = (then) => {
        then(/^the (.*) should appear on the menu$/, (arg0) => {
            expect(1).toBe(0)
        });

    }
    const thenTheNameShouldNotAppear = (then) => {
        then(/^the (.*) should not appear on the menu$/, (arg0) => {
            expect(1).toBe(0)
        });

    }

    test('user opens the side menu', ({ given, when, then }) => {

        givenTheMenuIsInAState(given)

        whenUserClicksOnMenuButton(when)

        thenTheMenuChangesState(then)

    });

    test('user closes the side menu', ({ given, when, then }) => {
        givenTheMenuIsInAState(given)

        whenUserClicksOnMenuButton(when)

        thenTheMenuChangesState(then)

    });

    test('user creates a new element on side menu', ({ given, and, when, then }) => {
        givenASpecificName(given)

        whenUserCreatesSomeThingWithAName(when)

        thenTheNameShouldAppear(then)

    });

    test('user renames an element on side menu', ({ given, when, then }) => {
        givenAnElementAndAName(given)

        whenUserChangesNameOfElement(when)

        thenTheNameShouldAppear(then)

    });

    test('user delete an element on side menu', ({ given, when, then }) => {
        givenAnElementAndAName(given)

        whenUserDeletesElementOnMenu(when)

        thenTheNameShouldNotAppear(then)

    });


});


