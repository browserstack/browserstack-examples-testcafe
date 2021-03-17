import { Selector } from 'testcafe';
import { image_not_loading_user } from '../../utils/roles/roles'

fixture("Click on Sign In button and Login as image_not_loading_user")
    .page(process.env.TEST_BASE_URL);


test("Click on Sign In button and Login as image_not_loading_user", async (t) => {

    const userName           = "image_not_loading_user";
    const userNameAfterLogin = Selector('.username');
    
    await t
        .useRole(image_not_loading_user)
        .expect(userNameAfterLogin.innerText)
        .eql(userName);
    
    })