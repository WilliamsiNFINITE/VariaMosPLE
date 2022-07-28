const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/external.feature', {tagFilter: '@included and not @excluded'});
import '@testing-library/jest-dom/extend-expect';
import DashBoard from "../../UI/WorkSpace/DashBoard";



defineFeature(feature, (test)=> {
    test('User visits external links', ({ given, when, then }) => {
        given('the user is on the main page', () => {
            render(<DashBoard />);
            expect(screen.getByRole('heading', {name: /project management/i})).toBeVisible()
            // expect(1).toBe(1);
            // return true;
        });

        when(/^the user clicks on the button (.*)$/, (arg0) => {
            console.log(arg0)
            expect(screen.getByRole('listitem', {
                name: /home/i
            })).toBeDefined()
            console.log('defined')
            return true;
        });

        then(/^the user should be sent to (.*)$/, (arg0) => {
            console.log(arg0)
            return true;
        });
    });

});


