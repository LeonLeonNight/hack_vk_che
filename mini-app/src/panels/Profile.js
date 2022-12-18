import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, PanelHeader, Group, FormLayout, FormItem, Input, FormLayoutGroup, Textarea, Checkbox, Button, Link, Select, File } from '@vkontakte/vkui';

import { Icon24Camera } from '@vkontakte/icons';

const Profile = props => (    
        <Panel id={props.id}>
            <PanelHeader 
                left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
            >Редактирование профиля
            </PanelHeader>
                <Group>
                    <FormLayout>
                        <FormItem
                            top="О себе"
                        >
                            <Textarea
                            />
                        </FormItem>
                        <FormItem top="Выбор дисциплин">
                            <Checkbox>
                                CS:GO
                            </Checkbox>
                            <Checkbox>
                                DOTA
                            </Checkbox>
                            <Checkbox>
                                LOL
                            </Checkbox>
                        </FormItem>
                        <FormItem>
                            <Button size="l" stretched>
                                Сохранить изменения
                            </Button>
                        </FormItem>
                    </FormLayout>
                </Group>
        </Panel>    
);
  
Profile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Profile;