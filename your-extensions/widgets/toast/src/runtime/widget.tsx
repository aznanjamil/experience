import { React, AllWidgetProps } from 'jimu-core';
import { Button, NotificationManager } from 'jimu-ui';

const Toast = (props: AllWidgetProps<any>) => {
  const [surveyData, setSurveyData] = React.useState(null);

  const fetchSurveyData = async () => {
    try {
      const response = await fetch('/path/to/survey123/api');
      const data = await response.json();
      setSurveyData(data);
      playSound();
      showToast();
    } catch (error) {
      console.error('Error fetching survey data:', error);
    }
  };

  const playSound = () => {
    const audio = new Audio('/assets/beep.mp3'); // Ensure `beep.mp3` is in the assets folder
    audio.play();
  };

  const showToast = () => {
    NotificationManager.success('New survey data received!', 'Survey123 Update');
  };

  return (
    <div className="widget-survey-data">
      <Button onClick={fetchSurveyData}>Fetch Survey Data</Button>
      {surveyData && <div>Data: {JSON.stringify(surveyData)}</div>}
    </div>
  );
};

export default Toast;
