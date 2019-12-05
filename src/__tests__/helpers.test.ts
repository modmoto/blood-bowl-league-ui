import {getBrowserLanguage, toAction} from "../helpers";
import {FetchTeamRequestedAction} from "../TeamManagementPage/TeamManagementActions";

it('returns a flat object from Action', () => {
    const flatAction = toAction(new FetchTeamRequestedAction("1234"));
    expect(flatAction.type).toBe('FETCH_TEAM_REQUESTED');
    expect(flatAction.payload.teamId).toBe('1234');
});

it('does return the current browser language', () => {
    const browserLanguage = getBrowserLanguage();
    expect(browserLanguage).toBe('end');
});