import { screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from 'axios'
import React from "react";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";

jest.mock('axios');

describe('USERS TEST',() => {

    test('test about link', async() => {
        renderWithRouter(<NavBar />);

        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('test main link', async() => {
        renderWithRouter(<NavBar />);

        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('test users link', async() => {
        renderWithRouter(<NavBar />);

        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
})
