namespace EindcaseHerkansing2022.Interfaces.CourseOverview;

public interface ICourseOverviewRepository
{
    Task<IEnumerable<Models.CourseOverview>> GetOverviewOfCourses();
    
    Task<IEnumerable<Models.CourseOverview>> GetCurrentWeekOverviewOfCourses(int weekNumber);
}