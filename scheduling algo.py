def prioritize_topics_category(topics, categories, ratios):
    priority_scores = list(zip(topics, categories, ratios))
    priority_scores.sort(key=lambda x: x[2], reverse=True)
    prioritized_topics = [topic for topic, _, _ in priority_scores]
    return prioritized_topics

def generate_category_schedule(topics, categories, ratios, total_study_time, max_daily_study_time, break_time):
    prioritized_topics = prioritize_topics_category(topics, categories, ratios)
    study_schedule = []

    while total_study_time > 0 and prioritized_topics:
        remaining_time_today = min(max_daily_study_time, total_study_time)
        study_day = []

        while remaining_time_today > 0 and prioritized_topics:
            topic = prioritized_topics[0]
            category = categories[topics.index(topic)]
            topic_ratio = ratios[topics.index(topic)]
            topic_time_estimate = remaining_time_today * topic_ratio

            if topic_time_estimate <= remaining_time_today:
                study_day.append(topic)
                remaining_time_today -= topic_time_estimate
                total_study_time -= topic_time_estimate
                prioritized_topics.pop(0)
            else:
                if remaining_time_today > 0:
                    study_day.append((topic, remaining_time_today))
                    total_study_time -= remaining_time_today
                    break

        if study_day:
            study_schedule.append(study_day)

        if prioritized_topics:
            total_study_time -= break_time

    return study_schedule

# Example data
topics = ["Topic A", "Topic B", "Topic C", "Topic D"]
categories = ["easy", "medium", "hard", "medium"]
ratios = [0.3, 0.4, 0.2, 0.5]  # Ratios for each topic
total_study_time = 20  # Total time available for studying
max_daily_study_time = 8  # Maximum study time per day
break_time = 1  # Break time between study days

# Generate study schedule
schedule = generate_category_schedule(topics, categories, ratios, total_study_time, max_daily_study_time, break_time)

# Print study schedule
for day, topics in enumerate(schedule, start=1):
    topic_strings = []
    for topic_info in topics:
        if isinstance(topic_info, tuple):
            topic, time = topic_info
            topic_strings.append(f"{topic} ({time:.2f} hrs)")
        else:
            topic_strings.append(topic_info)
    topic_list = ', '.join(topic_strings)
    print(f"Day {day}: Study {topic_list}")
