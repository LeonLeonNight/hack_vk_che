import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, PanelHeaderBack, Group, FormLayout, FormItem, Input, FormLayoutGroup, Textarea, Checkbox, Button, Link, Select, File } from '@vkontakte/vkui';
import { Icon24Camera } from '@vkontakte/icons';

const Teams = props => (
    <Panel id={props.id}>
    <PanelHeader
        left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
        Форма регистрации команды
    </PanelHeader>
    <Group>
        <FormLayout>
            <FormItem
                top="Название команды"
            >
                <Input
                    type="name"
                    name="comand_name"
                    placeholder='название команды'
                />
            </FormItem>
            <FormItem top="Дисциплина">
                <Select
                    placeholder="Выберете дисциплину"
                    options={[
                        {
                            value: "CS:GO",
                            label: "CS:GO",
                        },
                        {
                            value: "DOTA",
                            label: "DOTA",
                        },
                        {
                            value: "LOL",
                            label: "LOL",
                        },
                    ]}
                />
            </FormItem>

            <FormItem top="Логотип команды">
                <File before={<Icon24Camera role="presentation" />} size="m">
                    Загрузить логотип
                </File>
            </FormItem>

            <FormItem>
                <Checkbox>
                    Согласен с продажей <Link>почки</Link>
                </Checkbox>
            </FormItem>

            <FormItem>
                <Button size="l" stretched>
                    Зарегистрироваться
                </Button>
            </FormItem>
        </FormLayout>
    </Group>
</Panel>        
);

Teams.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Teams;