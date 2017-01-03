require 'pry'
#makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

#makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"]



def makeFriendlyDates(input)
  months = {
    '01' => 'January',
    '02' => 'February',
    '03' => 'March',
    '04' => 'April',
    '05' => 'May',
    '06' => 'June',
    '07' => 'July',
    '08' => 'August',
    '09' => 'September',
    '10' => 'October',
    '11' => 'November',
    '12' => 'December'
  }

  reference_year = 0
  reference_month = 0
  input.each do |formated_date|
    formated_date = formated_date.split('-')

    binding.pry

    newdate[1] = months[ newdate[1] ]
    today = Time.now

  end

end

makeFriendlyDates(["2016-07-01", "2016-07-04"]) # should return ["July 1st","4th"]
