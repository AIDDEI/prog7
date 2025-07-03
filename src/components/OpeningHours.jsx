import { View, Text } from "react-native";
import { useContext } from "react";

import { ThemeContext } from "../css/ThemeContext";
import { createStyles } from "../css/styles";
import { useTranslation } from 'react-i18next';

const daysOrder = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
];

const OpeningHours = ({ openingHours }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const { t } = useTranslation();

    const daysTranslated = {
        monday: t('days.monday'),
        tuesday: t('days.tuesday'),
        wednesday: t('days.wednesday'),
        thursday: t('days.thursday'),
        friday: t('days.friday'),
        saturday: t('days.saturday'),
        sunday: t('days.sunday'),
    };

    if (!openingHours || typeof openingHours !== 'object') return null;

    return (
        <View style={styles.openingHoursSection}>
            <Text style={styles.sectionTitle}>{t('generic.opening_hours') + ":"}</Text>
            {daysOrder.map(day => {
                const info = openingHours[day];
                return (
                    <View key={day} style={styles.openingHoursRow}>
                        <Text style={styles.openingHoursDay}>{daysTranslated[day] || day}</Text>
                        <Text style={styles.openingHoursTime}>
                            {info
                                ? `${info.open} - ${info.close}`
                                : t('generic.closed')
                            }
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

export default OpeningHours;